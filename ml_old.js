
predict=79

iter=150

m=1
c=1



function setup() {

				//console.log('prediction before-->'+(m*predict+c).toString())

				createCanvas(400,400);
				p=[[24,200],[50,50],[75,24]] //train data points
				
				
				//main

      //learning rates
				k=0.00007
				r=0.07
				
				for(let j=0; j<iter;j++){
								
								err ='0'
								y=cost([24,50,75],[200,50,24],err)
								
								gr=gradient_descent(y,m,c,k,r)
								m= gr[0]
								c= gr[1]
								k=k
								r=r
								console.log(gr[2])//printing slope of weights
								}
								//main
				//console.log('prediction after-->'+(m*predict+c).toString())
	}
	
function draw() {

				background(240);
				
				for(let h =0; h<p.length ;h++){
								point(p[h][0], p[h][1])
								strokeWeight(5)
				}
					
				d_line(m,c)		
}									
