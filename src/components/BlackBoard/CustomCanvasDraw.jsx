import React from "react";
import CanvasDraw from "react-canvas-draw";

class CustomCanvasDraw extends CanvasDraw {
  constructor(props) {
    super(props);
    this.redoStack = props.redoStack || [];
  }

  // Override the undo method to implement custom logic
  undo = () => {
    let lines = [];
    let redoLine = null;
    if (this.lines.length) {
      lines = this.lines.slice(0, -1);
      redoLine = this.lines.slice(-1)[0];
    } else if (this.erasedLines.length) {
      lines = this.erasedLines.pop();
      redoLine = lines;
    }
    if (redoLine) {
      this.redoStack.push(redoLine);
    }

    this.clearExceptErasedLines();
    this.simulateDrawingLines({ lines, immediate: true });
    this.triggerOnChange();
  };

  // Implement the redo method
  redo = () => {
    if (this.redoStack.length) {
      let lines = [...this.lines, this.redoStack.pop()];
      this.clearExceptErasedLines();
      this.simulateDrawingLines({ lines, immediate: true });
      this.triggerOnChange();
    }
  };

  getSaveData = () => {
    // Construct and return the stringified saveData object
    return JSON.stringify({
      canvasData: {
        lines: this.lines,
        width: this.props.canvasWidth,
        height: this.props.canvasHeight,
      },
      redoStack: this.redoStack,
    });
  };

  loadSaveData = (saveData, immediate = this.props.immediateLoading) => {
    if (typeof saveData !== "string") {
      throw new Error("saveData needs to be of type string!");
    }

    const data = JSON.parse(saveData);
    const { lines, width, height } = data.canvasData;
    const { redoStack } = data;
    this.redoStack = redoStack || [];
    if (!lines || typeof lines.push !== "function") {
      throw new Error("saveData.lines needs to be an array!");
    }

    this.clear();

    if (
      width === this.props.canvasWidth &&
      height === this.props.canvasHeight
    ) {
      this.simulateDrawingLines({
        lines,
        immediate,
      });
    } else {
      // we need to rescale the lines based on saved & current dimensions
      const scaleX = this.props.canvasWidth / width;
      const scaleY = this.props.canvasHeight / height;
      const scaleAvg = (scaleX + scaleY) / 2;

      this.simulateDrawingLines({
        lines: lines.map((line) => ({
          ...line,
          points: line.points.map((p) => ({
            x: p.x * scaleX,
            y: p.y * scaleY,
          })),
          brushRadius: line.brushRadius * scaleAvg,
        })),
        immediate,
      });
    }
  };

  render() {
    return super.render(); // Keep the original rendering logic from CanvasDraw
  }

  handleDrawEnd = (e) => {
    this.redoStack = [];
    this.interactionSM = this.interactionSM.handleDrawEnd(e, this);
    this.mouseHasMoved = true;
  };
}

export default CustomCanvasDraw;
