// 輪班item
 tkobj1=[{item:'夜',color:'red'},{item:'中', color:'blue'},{item:'早',color:'green'}]
 tkobj2=[{item:'早',color:'green'},{item:'夜',color:'red'},{item:'中', color:'blue'}]
 function Adjust_tkobj()   //調整輪班順序
 {
 	( new Date(SY,SM,d) < new Date("2023/12/3") ) ? tkobj=tkobj2 : tkobj=tkobj1
 
 }