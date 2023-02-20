
function d_line(m,b=0){
				if(m!=0 && m>0){
					line(0,b, (height-b)/m, height)		
					
					 
			
      					
											}
				else if(m==0) {
								line(0,b,width,b)}
				else if(m<0){
								line(0,b, -b/m, 0)
				}
}




function cost(test_inp_arr,ans_arr,err_str){

							for(let i=0; i<test_inp_arr.length ;i++){
									u_1=ans_arr[i]
									u_2=test_inp_arr[i]
									err_str = err_str +'+' +'(' + u_1.toString()  +'-w*' + u_2.toString() +'-b'+ ')^2'
				} 
							return err_str
}



function gradient_descent(der_func,w_start,b_start,w_coeff,b_coeff){

				g_1 =math.derivative(der_func, 'w')
								
				g_2=math.derivative(der_func, 'b')
				
				slope_w = g_1.evaluate({'w':w_start,'b':b_start})
								
				slope_b = g_2.evaluate({'b':b_start,'w':w_start})
				
				
				w_start = w_start - w_coeff*slope_w
								
				b_start = b_start - b_coeff*slope_b //extra
							
				return [w_start,b_start,slope_w,slope_b]
				
}



