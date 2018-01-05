/* DOCUMENTATION :
   Props used :
    data -> It is the array containing the data
    width -> (optional) It is the width of the graph
    height-> (optional) It is the height of the graph
    xAxis_name-> (optional)
    xAxis_name-> (optional)
*/

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import {ResponsiveContainer,BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

class BarChartComponent extends React.Component
 {
   constructor(props){
     super(props);
   }

  render()
  {
    let styleItem = {
      color : '#fff'
    }
    let styleWrapper = {
      backgroundColor:'#1a1a1a',
      color:'#fff',
      borderRadius:'4px',
      margin: 0
    }

    return(
      <ResponsiveContainer width='100%' aspect={3}>
      <BarChart width={this.props.width} height={this.props.height} data={this.props.data}>
         <XAxis dataKey={this.props.xAxis_name} tick={{stroke: '#c9c9c9', strokeWidth: 1}} tickSize={14} />
         <YAxis axisLine={false} tickSize={4}/>
         <CartesianGrid horizontal={true} vertical={false}/>
         {
           this.props.data.length > 7 ?
           <Brush dataKey={this.props.xAxis_name} height={30} stroke="#8884d8"/>:null
         }
         <Tooltip cursor={{fill: 'none'}} itemStyle={styleItem} wrapperStyle={styleWrapper}/>
         <Legend verticalAlign="top" align="right" iconType="circle" iconSize={8} height={64}/>
       <Bar dataKey={this.props.yAxis_name} fill="#8884d8" stroke="#fff" maxBarSize={32}/>
     </BarChart>
   </ResponsiveContainer>)

  }
};


 BarChartComponent.defaultProps = {
   width:1312,
   height:440,
   xAxis_name:"date",
   yAxis_name:"Attempt"
 };


export default BarChartComponent
