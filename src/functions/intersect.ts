import { Line } from '../types/Line'
import { slope } from './slope'
import { Vector } from '../types/Vector'

/**
 * Intersect two-dimensional lines. Returns undefined if lines are parellel.
 */
export function intersect([v1, v2]: Line<2>, [v3, v4]: Line<2>): Vector<2> | undefined {
  const [x1, y1] = v1, [x3, y3] = v3
  const m1 = slope(v1, v2)
  const m3 = slope(v3, v4)

  // lines are parallel
  if (m1 === m3) {
    return
  }

  // first line is vertical
  const b3 = y3 - (m3 * x3)

  if (!isFinite(m1)) {
    return [x1, (m3 * x1) + b3]
  }

  // second line is vertical
  const b1 = y1 - (m1 * x1)

  if (!isFinite(m3)) {
    return [x3, (m1 * x3) + b1]
  }

  // calculate intersection point
  const x = (b3 - b1) / (m1 - m3)
  const y = (m1 * x) + b1

  return [x, y]
}
