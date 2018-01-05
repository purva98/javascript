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
import {LineChart,Brush, Line,ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

class LineChartComponent extends React.Component
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
        borderRadius:'4px'
      }

    	return (
        <ResponsiveContainer width='100%' aspect={3}>
      	<LineChart width={this.props.width} height={this.props.height} data={this.props.data}>
          <defs>
            <linearGradient id="colorUv" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7873f5" />
              <stop offset="100%" stopColor="#ec77ab" />
            </linearGradient>
          </defs>
         <XAxis dataKey={this.props.xAxis_name} tick={{stroke: '#c9c9c9', strokeWidth: 1}} tickSize={10} padding={{left:64,right:64}}/>
         <YAxis axisLine={false} tickSize={4}/>
         <CartesianGrid horizontal={true} vertical={false}/>
         {
           this.props.data.length > 8 ?
           <Brush dataKey={this.props.xAxis_name} height={30} stroke='url(#colorUv)'/>:null
         }
         <Tooltip cursor={{fill: 'none'}} itemStyle={styleItem} wrapperStyle={styleWrapper}/>
         <Legend verticalAlign="top" align="right" iconType="circle" iconSize={8} height={64}/>
       <Line type="monotone" dataKey={this.props.yAxis_name} stroke='url(#colorUv)' strokeWidth={3} activeDot={{r: 8}}/>
        </LineChart>
      </ResponsiveContainer>
      )
  }
};


LineChartComponent.defaultProps = {
   width:1312,
   height:440,
  xAxis_name:"name",
  yAxis_name:"Attempts"
};

export default LineChartComponent
