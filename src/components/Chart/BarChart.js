import React from 'react';

export default function BarChart({ index, pos }) {
  return (
    <div>
      {pos === index ? index : null}
    </div>
  )
}