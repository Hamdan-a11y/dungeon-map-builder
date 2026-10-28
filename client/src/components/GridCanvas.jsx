import { useRef, useEffect } from 'react';
import { GRID_SIZE, TILE_SIZE } from '../constants/grid';

function GridCanvas() {
  const canvasRef = useRef(null);
  const width = GRID_SIZE * TILE_SIZE;
  const height = GRID_SIZE * TILE_SIZE;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    // 1. Draw canvas background
    ctx.fillStyle = '#1e1e28';
    ctx.fillRect(0, 0, width, height);

    // 2. Draw 20x20 grid lines
    ctx.strokeStyle = '#383a4c';
    ctx.lineWidth = 1;

    ctx.beginPath();
    for (let i = 0; i <= GRID_SIZE; i++) {
      const pos = i * TILE_SIZE;

      // Vertical line: (pos, 0) to (pos, height)
      ctx.moveTo(pos, 0);
      ctx.lineTo(pos, height);

      // Horizontal line: (0, pos) to (width, pos)
      ctx.moveTo(0, pos);
      ctx.lineTo(width, pos);
    }
    ctx.stroke();
  }, [width, height]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{ border: '2px solid #4f526b', borderRadius: '4px' }}
    />
  );
}

export default GridCanvas;