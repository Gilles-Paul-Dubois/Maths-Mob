/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var nameSpace1={};
nameSpace1.board = JXG.JSXGraph.initBoard('box1',
  {boundingbox:[-3,2,3,-2],axis:false,grid:false,
   showNavigation:false});
   
nameSpace1.F1=nameSpace1.board.create('Point',[-1,0], {visible:false})   ;
nameSpace1.F2=nameSpace1.board.create('Point',[1,0], {visible:false})   ;
nameSpace1.E=nameSpace1.board.create('ellipse',[nameSpace1.F1, nameSpace1.F2,3], {fillColor:'#d3d3d3'});
nameSpace1.A=nameSpace1.board.create('point',[0,-1],{size:1, withLabel:false});
nameSpace1.B=nameSpace1.board.create('point',[0,1],{size:1, withLabel:false});
nameSpace1.S=nameSpace1.board.create('line',[nameSpace1.A, nameSpace1.B],{ straightFirst:false, straightLast:false})