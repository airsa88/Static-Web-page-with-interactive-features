/* 
@Author - Antony

This file has main methods which update the webpage based on the given input data 

Code reference: 
M. Bostock, "D3.js - Data-Driven Documents", D3js.org, 2018. [Online]. Available: https://d3js.org/.

*/

/* Method to add relevant images on  the static web page through SVG. */
function renderImage(imageName, input) {
		var xAxis = input.xAxis;
		var yAxis = input.yAxis;
		var width = input.width;
		var height = input.height;
		var loadImage =svg.append("image")
			.attr("x",xAxis)
			.attr("y",yAxis)
			.attr("width",width)
			.attr("height",height)
			.attr("xlink:href","images/" + imageName + ".jpg")

		switch (imageName) {
			
			// Devices fly animation
			case "image1":
			case "image3":
				loadImage.attr("x", 0)
					.attr("y", 0)
					.attr("width", 0)
					.attr("height", 0)
					.transition()
					.duration(2500)
					.attr("x", xAxis)
					.attr("y", yAxis)
					.attr("width",width)
					.attr("height",height)
				break;

			// Controller vibrate animation
			case "image2":
				loadImage.attr("x", 0)
					.attr("y", 0)
					.attr("width", 0)
					.attr("height", 0)
					.transition()
					.duration(2500)
					.attr("x", xAxis)
					.attr("y", yAxis)
					.attr("width",width)
					.attr("height",height)
				loadImage.attr("class", "shake")
						.on('mouseover', function(d){
							d3.select(this).styles({
								"animation": "shake 0.5s",
								"animation-iteration-count": "infinite"
							});
						})
						.on('mouseout', function(d){
							d3.select(this).style("animation", null)
						})
				break;
			
			// Disk image opacity animation	
			case "image4":
				loadImage.style("opacity", 0)
					.transition()
					.duration(3000)
					.style("opacity", 1)
				break;

			// Duck walking animation
			case "image10":
				loadImage.attr("x", xAxis + 120)
					.style("opacity", 0)
					.transition()
					.duration(1500)
					.style("opacity", 1)
					.transition()
					.duration(3000)
					.attr("x", xAxis - 290)
				    .transition()
				    .delay(200)
				    .attr("x", xAxis) 
				break;
			// Angry bird fly animation
			case "image11":
					loadImage.attr("x", xAxis + 280)
						.attr("y", yAxis - 90)
						.attr("width", 0)
						.attr("height", 0)
						.transition()
						.duration(1200)
						.attr("x", xAxis)
						.attr("y", yAxis)
						.attr("width",width)
						.attr("height",height)
					break;
		}
	}
	

/* Method to add text segments based on the input json data */
function addTextSegment(inputArray, xAxis, yAxis) {
		var text = svg.append("text")
						.attr("transform", "translate(" + xAxis + "," + yAxis + ")")
		text.selectAll("tspan")
				.data(inputArray)
				.enter()
				.append("tspan")
				.attr("x", function(d) { return d.x })
				.attr("dx", function(d) { return d.dx })
				.attr("dy", function(d) { return d.dy })
				.attr("class", function(d) { return d.class })
				.text(function(d) { return d.text })
	}
	

/* Method to draw two lines separated by a star at the top and bottom of the page. */
function addHorizontaLines(yAxis) {
		var group = svg.append("g")
							.attr("transform", "translate(" + 200 + "," + yAxis + ")")

		//Draws left line
		group.append("line")
			.attr("class", "title-line")
			.transition()
			.duration(500)
			.attr("x2", 205)

		//Draws star
		group.append("polygon")
			.attr("points", "219,5.25, 220,1, 217,-3, 222,-3, 224,-8, 226,-3, 231,-3, 228,1, 228.75,5.25, 224,3")
			.attr("class", "red-text")
			.style("opacity", 0)
			.transition()
			.duration(1000)
			.style("opacity", 1)

		//Draws right line
		group.append("line")
			.attr("class", "title-line")
			.attr("x1", 447)
			.attr("x2", 447)
			.transition()
			.duration(500)
			.attr("x1", 242)
	}
	
	
/* Method to draw vertical bar charts in the static web page. */ 
function drawVerBarChart(inputArray, meta) {

		var barHeight = meta.yScaleWidth * (meta.noOfYScales - 1)
		var firstBarOffset = meta.lineOffset + meta.barOffset
		var bar = svg.append("g")
							.attr("transform", "translate(" + meta.xAxis + "," + meta.yAxis + ")")
		var animationCount = meta.noOfYScales

			// Draws all vertical lines and label of y axis values
		for (var i = 0; i < meta.noOfYScales; i++) {
			var y = meta.yScaleWidth * i
			var yLabel = (meta.noOfYScales - i - 1) * meta.yScaleFactor
			
			// Adding y-axis values
			bar.append("text")
				.attr("x",0)
				.attr("y",y + 7)
				.attr("dx","1em")
				.attr("class", "small-text")
				.style("text-anchor","end")
				.text(yLabel)

			var x1 = 0
			var x2 = 0
			// Draws lines of y-axis values using animations
			bar.append("line")
				.attr("class", "barchart-line")
					.style("stroke-width", i == (meta.noOfYScales - 1) ? 2 : 1)
					.attr("x1", function() {
						if ((i == meta.noOfYScales - 1) && meta.isShortAxis) {
							x1 = meta.lineOffset + 5
						} else {
							x1 = meta.lineOffset
						}
						return x1
					})
					.attr("y1", y)
					.attr("x2", function() {
						if ((i == meta.noOfYScales - 1) && meta.isShortAxis) {
							x2 = meta.chartWidth - 10
						} else {
							x2 = meta.chartWidth
						}
						return x1
					})
					.attr("y2", y)
					.transition()
					.duration(250 * (meta.noOfYScales - i))
					.attr("x2", x2)
					.on('end', function() {
							animationCount--
							if (animationCount == 0) {
									showLabel()
							}
					})
		}

		// Creates a bar rects groups
		var barGroup = bar.selectAll("g")
								.data(inputArray)
								.enter()
								.append("g")
		
		// Adding a bar rect
		barGroup.append("rect")
					.attr("class", "red-text")
					.attr("id", "active")
							.attr("height", function(d) { 
						d.height = (d.value / meta.yScaleFactor * meta.yScaleWidth) - 1
						return 0
					})
					.attr("width", meta.barWidth)
					.attr("x", function(d, i) { 
						d.xAxis = (i * (meta.barWidth + meta.xScaleWidth)) + firstBarOffset
						return d.xAxis 
					})
					.attr("y", function(d) { 
						d.yAxis = barHeight - d.height - 1 
						return d.yAxis + d.height
					})
					.on("mouseover", function(d) {
						showVerBarTooltip(d, meta.xAxis, meta.yAxis)
						console.log("enter")
						d3.select(this)
							.attr("class", "red-text-highlight")
					})
					.on("mouseout", function() {
					    closeVerBarTooltip()
						d3.select(this)
								.attr("class", "red-text")
						d3.selectAll("#active").style("opacity",1);
					})
					.on("click", function(){
						d3.selectAll("#active").style("opacity",0);
						d3.select(this).style("opacity",1);
					})

		// Adding x-axis values
			barGroup.append("text")
					.attr("class", "barChart-year-text")
					.attr("x", function(d, i) { return d.xAxis + ((meta.barWidth - 35) / 2) })
					.attr("y", function(d) { return barHeight + 30 })
					.text(function(d) { return d.year })
					.style("opacity", 0)

 /* Method to animate bar */
 function animateBars() {
			animationCount = inputArray.length
			barGroup.selectAll("rect")
					.transition()
					.duration(600)
					.attr("height", function(d) { return d.height })
					.attr("y", function(d) { return d.yAxis })
		}

 /* Method to show labels only after the lines are drawn */
 function showLabel() {
			animationCount = inputArray.length
			bar.selectAll("text")
					.transition()
					.duration(200)
					.style("opacity", 1)
					.on('end', function() {
							animationCount--
							if (animationCount == 0) {
									animateBars()
							}
						})
		}
	}	
	

/* Method to add the legends used for horizontal barchart */
function addHorBarchartLegends(argument) {
		var group = svg.append("g")
						.attr("transform", "translate(" + 412 + ",1168)")

		// Adding texts for first legend
		group.append("text")
			.attr("class", "small-text")
			.text("Physical Format")
				.attr("y", 17)	

		// Adding Icons for first legend
		group.append("rect")
				.attr("class", "red-text")
				.attr("height", 18)
				.attr("width", 18)
				.attr("x", 178)

		// Adding texts for second legend
		group.append("rect")
				.attr("height", 18)
				.attr("width", 18)
				.attr("x", 206)

		// Adding Icons for second legend
		group.append("text")
				.attr("x",234)
				.attr("class", "small-text")
				.text("Digital Format*")
				.attr("y", 17)
	}


/* Method to draw all the arcs with images  */ 
function renderArcsImages() {

		var arc = d3.arc()
						.innerRadius(55)
						.outerRadius(70)
						.startAngle(Math.PI)

			// Arcs chart group is created
		var chart = svg.append("g")
						.attr("transform", "translate(115, 1855)")

			// Indvidual arc group is created
		var chartGroup = chart.selectAll("g")
								.data(arcInput)
								.enter()
								.append("g")
								.attr("transform", function(d, i) { return "translate(" + (160 * i) + ", 0)" })

			// Image is added to individual arc group by zoom in animation
		chartGroup.append("image")
						.attr("xlink:href", function(d) { return "images/" + d.image + ".jpg" })
						.attr("x", function(d) { return -(d.imageWidth / 2) + (d.imageWidth / 2) })
							.attr("y", function(d) { return -(d.imageHeight / 2) + (d.imageHeight / 2) })
						.attr("width", function(d) { return 0 })
							.attr("height", function(d) { return 0 })
						.transition()
						.delay(function(d, i) {
							return (i+1) * 800;
						})
						.attr("x", function(d) { return -(d.imageWidth / 2) })
							.attr("y", function(d) { return -(d.imageHeight / 2) })
						.attr("width", function(d) { return d.imageWidth })
							.attr("height", function(d) { return d.imageHeight })


			// Arc is added to individual arc group
		chartGroup.append("path")
						.datum(function(d) { return {endAngle: d.angle} })
						.attr("fill", "red")
						.transition()
						.delay(function(d, i) {
							return (i+1) * 1000;
						})
						.attrTween('d', function(d) {
							var i = d3.interpolate(d.angle+0.1, d.angle);
							return function(t) {
									d.angle = i(t);
								return arc(d);
							}
						})

			// Percent value is added to individual arc group
		chartGroup.append("text")
					.attr("class", "small-text")
					.attr("x", 5)
					.attr("y", 70)
					.text(function(d) { return d.percent })

			// Label is added to individual arc group
		chartGroup.append("text")
					.attr("class", "legend-text")
				.style("text-anchor","middle")
					.attr("y", 103)
					.text(function(d) { 
						var names = d.name.split(" ")
						for (var j = 1; j < names.length; j++) {
						chartGroup.append("text")
							.attr("class", "legend-text")
									.style("text-anchor","middle")
							.attr("dy", (j * 1.25) + "em")
									.attr("y", 103)
							.text(function(y) {
								if (y == d) {
									return names[j]
								} 
							})
					}
						return names[0]
					})
	}


/* Method to add legends to the SVG */
function addLegends(input) {
	
	 var rectColor = input.color;
	 var text = input.text;
	 var xAxis = input.xAxis;
	 var yAxis = input.yAxis;
	 
	 var group = svg.append("g")
							.attr("transform", "translate(" + xAxis + "," + yAxis + ")")

		//Draws icon
		group.append("rect")
				.attr("fill", rectColor)
				.attr("height", 18)
				.attr("width", 18)

			//Adds text next to icon
		group.append("text")
				.attr("class", "legend-text")
				.attr("dx", "1.4em")
				.attr("dy", "0.74em")
				.text(text)
	}	
	
	
/* Method to draw horizontal bar charts for digital vs physical sales. */
function drawHorBarChart(inputArray) {

		// Draws all bar charts with input data and y axis values
		for (var i = 0; i < inputArray.length; i++) {
			var data = inputArray[i]
			var textXOffset = xOffSet
			var textYOffset = 1243 + (i * 62)
			var rectXOffset = xOffSet + 55
			var rectYOffset = 1215 + (i * 62)
			var rectHeight = 40
			var physicalWidth = 700 * data.physical / 100
			var digitalWidth = 700 * data.digital / 100
			var animationCount = inputArray.length

			// Adding y-axis values
			svg.append("text")
				.attr("x", textXOffset)
				.attr("y", textYOffset)
				.attr("class", "barChart-year-text")
				.text(data.year)

			// Adding first bar rect		
			svg.append("rect")
					.attr("class", "red-text")
					.attr("height", rectHeight)
					.attr("width", 0)
					.attr("x", rectXOffset)
					.attr("y", rectYOffset)
					.transition()
					.duration(1300)
					.attr("width", physicalWidth)
					.attr("x", rectXOffset + 120)
					//.transition()
					//.duration(300)
			        //.delay(250)
					.attr("x", rectXOffset)
			        

			// Adding first bar rect percent
				svg.append("text")
				.attr("x", rectXOffset + 10)
				.attr("y", textYOffset - 1)
				.attr("class", "small-text white-text")
				.text(data.physical)
				.style("opacity", 0)

				rectXOffset += physicalWidth

			// Adding second bar rect
				svg.append("rect")
					.attr("height", rectHeight)
					.attr("width", 0)
					.attr("x", rectXOffset + digitalWidth)
					.attr("y", rectYOffset)
					.transition()
					.duration(1050)
					.attr("x", rectXOffset)
					.attr("width", digitalWidth - 120)
					.transition()
					.duration(300)
			        .delay(250)
					.attr("width", digitalWidth)
					.on('end', function() {
							animationCount--
							if (animationCount == 0) {
									showLabel()
							}
					})

			// Adding second bar rect percent
			svg.append("text")
				.attr("x", rectXOffset + digitalWidth - 37)
				.attr("y", textYOffset - 1)
				.attr("class", "small-text white-text")
				.text(data.digital)
				.style("opacity", 0)

	 // Method to show label		
		function showLabel() {
					svg.selectAll("text")
					.style("opacity", 1)
				}
		}
	}


/* Method to draw a pie chart based on the given input data. */
function drawPieChart(inputArray, input) {
	
		var xAxis = input.xAxis;
		var yAxis = input.yAxis;

		var arc = d3.arc()
						.innerRadius(0)
						.outerRadius(130)

		var pie = d3.pie()
						.value(function(d) { return d.percent })
						.sort(null)
						
		// A group is created
		var group = svg.append("g")
							.attr("transform", "translate(" + xAxis + "," + yAxis + ")")

		// Arc groups created as sub group
		var subGroup = group.selectAll("arc")
								.data(pie(inputArray))
								.enter()
								.append("g")
								.attr("class", "arc")
								

		// Arcs is styled with delayed transition
		subGroup.append("path")
					.attr("fill", function(d) {return d.data.color} )
	                .attr('stroke',"white")
	                .attr('stroke-width',2.5)
					.transition()
					.delay(function(d, i) {
						return i * 800;
					})
					.attrTween('d', function(d) {
						var i = d3.interpolate(d.startAngle+0.1, d.endAngle);
						return function(t) {
								d.endAngle = i(t);
							return arc(d);
						}
					})

		// Arcs is provided with mouse controller events
		subGroup.selectAll("path")
					.on("mouseover", function(d) {showPiechartTooltip(d)})
					.on("mouseout", function() {closePiechartTooltip()})

		// Percentage is added to arc with mouse over and click events
		subGroup.append("text")
				.attr("transform", function(d){ 
					var centroid = arc.centroid(d)
					var xValue = centroid[0] - 5
					var yValue = -20
					if (centroid[1] > 0) {
						if (centroid[1] < 10) {
							yValue = 10
						} else {	
							yValue = 90
						}
					}
					return "translate(" + xValue + "," + yValue +")"
				})
				.attr("text-anchor", "middle")
				.attr("class", "pieChart-text white-text")
				.text(function(d){ 
					if (d.data.percent < 10) {
						subGroup.append("text")
						.attr("text-anchor", "middle")
						.attr("class", "pieChart-text")
						.text(d.data.percent)
						.attr("x", 25)
						.attr("y", -140)
						return ""
					}	
					return d.data.percent 
				})
				.on("mouseover", function(d) { showPiechartTooltip(d) })
				.on("mouseout", function() { closePiechartTooltip() })
	           
	}

/* Method to show the tool tip on pie charts.  */
function showPiechartTooltip(d) {

		// Set styles of tooltip
		var tooltip = d3.select("#pieChart-tooltip")
									.style("left", d3.event.pageX + "px")
									.style("top", d3.event.pageY + "px")
									.style("opacity", 1)

		// Update category in pie chart tooltip	        
		tooltip.select("#category")
				.text( function() {
						if (d.data.name.length > 30) {
						return d.data.name.substring(0, 30) + " ..."
					} else {
						return d.data.name
					}
				})

		// Update percentage in pie chart tooltip
		tooltip.select("#percentage")
				.text(d.data.percent + "%")
	}


/* Method to hide the tool tip on pie charts.  */
function closePiechartTooltip() {
			d3.select("#pieChart-tooltip")
					.style("opacity", 0);
	}


/* Method to show the tool tip on Vertical bar charts.  */
function showVerBarTooltip(d, xAxis, yAxis) {

		var offSet = 270
		if (yAxis > 2000) {
			offSet = offSet - 10
		}
		// Set styles for tooltip in Bar chart
		var tooltip = d3.select("#v-barChart-tooltip")
									.style("left", xAxis + d.xAxis + 245 + "px")
									.style("top", yAxis - d.height + offSet + "px")
									.style("opacity", 1)

		// Update year in tooltip	        
		tooltip.select("#year")
				.text(d.year)

		// Update sales or gamers in bar chart tooltip
		tooltip.select("#bchartValue")
				.text(yAxis > 2000 ? "Gamers" : "Sales")

		// Update value in tooltip
		tooltip.select("#value")
				.text(d.value + " millions")
	}


/* Method to hide the tool tip on Vertical bar charts.  */
function closeVerBarTooltip() {
			d3.select("#v-barChart-tooltip")
					.style("opacity", 0);
	}




