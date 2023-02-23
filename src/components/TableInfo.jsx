import React from 'react'

const TableInfo = () => {
  return (
    <table className="h2h_info full-w flex-row flex-wrap">
      <tbody className="flex-row full-w flex-wrap">
        <tr className="flex-row full-flex">
          <th className="full-flex flex-row jc-c ai-c">Avg. goals per match</th>
          <td className="flex-row jc-c ai-c">1.54</td>
        </tr>
        <tr className="flex-row full-flex">
          <th className="full-flex flex-row jc-c ai-c">Avg. cards per match</th>
          <td className="flex-row jc-c ai-c">1.54</td>
        </tr>
        <tr className="flex-row full-flex">
          <th className="full-flex flex-row jc-c ai-c">Avg. fouls per match</th>
          <td className="flex-row jc-c ai-c">1.54</td>
        </tr>
      </tbody>
      <tbody className="flex-row home_team full-w flex-wrap">
        <tr className="flex-row full-flex">
          <th className="full-flex flex-row jc-c ai-c">Avg. goals per match (Home)</th>
          <td className="flex-row jc-c ai-c">1.54</td>
        </tr>
        <tr className="flex-row full-flex">
          <th className="full-flex flex-row jc-c ai-c">Avg. cards per match (Home)</th>
          <td className="flex-row jc-c ai-c">1.54</td>
        </tr>
        <tr className="flex-row full-flex">
          <th className="full-flex flex-row jc-c ai-c">Avg. fouls per match (Home)</th>
          <td className="flex-row jc-c ai-c">1.54</td>
        </tr>
      </tbody>
      <tbody className="flex-row away_team full-w flex-wrap">
        <tr className="flex-row full-flex">
          <th className="full-flex flex-row jc-c ai-c">Avg. goals per match (Away)</th>
          <td className="flex-row jc-c ai-c">1.54</td>
        </tr>
        <tr className="flex-row full-flex">
          <th className="full-flex flex-row jc-c ai-c">Avg. cards per match (Away)</th>
          <td className="flex-row jc-c ai-c">1.54</td>
        </tr>
        <tr className="flex-row full-flex">
          <th className="full-flex flex-row jc-c ai-c">Avg. fouls per match (Away)</th>
          <td className="flex-row jc-c ai-c">1.54</td>
        </tr>
      </tbody>
    </table>
  )
}

export default TableInfo
