/* 
@Author - Antony

This file contains calling functions to render the visuals in web page using input data 

*/

/* X- axis - start Offset value */ 
var xOffSet = 47

/* Input values for renderImage function call */
var renderImageFnInput = [
	{
		xAxis: 118,
		yAxis: 168,
		width: 91,
		height: 57
	},
	{
		xAxis: 25,
		yAxis: 40,
		width: 96,
		height: 144
	},
	{
		xAxis: 718,
		yAxis: 112,
		width: 109,
		height: 119
	},
	{
		xAxis: 680,
		yAxis: 425,
		width: 141,
		height: 82
	},
	{
		xAxis: 610,
		yAxis: 2222,
		width: 90,
		height: 98
	},
	{
		xAxis: 650,
		yAxis: 4050,
		width: 110,
		height: 120
	},
	
	{
		xAxis: 37,
		yAxis: 4444,
		width: 342,
		height: 66
	}
	
]

/* Input values for drawPieChart function call */
var pieChartFnInput = [
	{
		xAxis: 220,
		yAxis: 3200
	},
	
	{
		xAxis: 610,
		yAxis: 3200
	},
    
    { 	
	    xAxis: 230,
		yAxis: 3855
	}
]

/* Input values for sales pie chart legend */
var legendsInput = [
	{
		color: "red",
		text: "PUZZLE, BOARD GAME, GAME SHOW, TRIVIA, CARD GAMES",
		xAxis: 205,
		yAxis: 3390
	},
	{
	    color: "black",
		text: "ACTION, SPORTS, STRATEGY, ROLE-PLAYING",
		xAxis: 205,
		yAxis: 3420	
	},
	{
	    color: "#E1E2E4",
		text: "OTHER",
		xAxis: 205,
		yAxis: 3450
	},
	{
	    color: "red",
		text: "CASUAL GAMES",
		xAxis: 425,
		yAxis: 3800
	},
	{
	    color: "black",
		text: "ACTION, SPORTS, STRATEGY, ROLE-PLAYING",
		xAxis: 425,
		yAxis: 3830
	},
	{
	    color: "#9B9C9E",
		text: "SHOOTER",
		xAxis: 425,
		yAxis: 3860
	},
	{
	    color: "#E1E2E4",
		text: "OTHER",
		xAxis: 425,
		yAxis: 3890
	}
	
]

/* Bar chart attributes */ 
 var barChartVals = { barWidth: 30,
					xScaleWidth: 34.4,
					yAxis: 478,
					xAxis: xOffSet,
					noOfYScales: 7,
					yScaleWidth: 57,
					yScaleFactor: 2,
					chartWidth: 755,
					lineOffset: 47,
					barOffset: 18,
					isShortAxis: false }

/* vertical chart meta attributes for mobile gamers */ 
 var barvChartVals = { barWidth: 55,
					xScaleWidth: 61,
					yAxis: 2315,
					xAxis: xOffSet + 14,
					noOfYScales: 5,
					yScaleWidth: 82,
					yScaleFactor: 50,
					chartWidth: 750,
					lineOffset: 43,
					barOffset: 34,
					isShortAxis: true }
	
	
/* SVG for div container */ 
var container = d3.select("#container")
var containerRectValue = container.node().getBoundingClientRect() 
var svg = container.append("svg")
					.attr("width", containerRectValue.width)
					.attr("height", containerRectValue.height)


/* Function calls for individual web elements */

/* Adding Image below the title */ 
renderImage("image2", renderImageFnInput[0])

/* Adding Image left to the title */ 
renderImage("image1", renderImageFnInput[1])

/* Adding Image right to the title */ 
renderImage("image3", renderImageFnInput[2])

/* Adding title text */ 
addTextSegment(titlePageInput, 120, 123)

/* Adding two lines separately by a star in the top */ 
addHorizontaLines(150)

/* Adding text segment below title */ 
addTextSegment(textBelowTitleInput, xOffSet, 270)

/* Draws vertical bar chart with the meta data and input */
drawVerBarChart(vBarSalesInput, barChartVals)

/* Adding Disc image on top of barchart */ 
renderImage("image4", renderImageFnInput[3])

/* Adding text below vertical Computer and Video game sales barchart */ 
addTextSegment(textBelowVBarSalesInput, xOffSet, 950)

/* Adding Legend group for horizontal bar chart */ 
addHorBarchartLegends()

/* Draws horizontal bar chart with the given data */ 
drawHorBarChart(hBarSalesInput)

/* Adding text segment below horizontal barchart */ 
addTextSegment(textBelowHBarInput, xOffSet, 1425)

/* Draws arcs with relevant household image */ 
renderArcsImages()

/* Adding text segment below household device images */ 
addTextSegment(textBelowArcInput, xOffSet, 2110)

/* Adding Cartoon image on barchart */ 
renderImage("image10", renderImageFnInput[4])

/* Draws vertical bar chart for Mobile Gamers with the meta and given input data */
drawVerBarChart(vBarMobileInput, barvChartVals)

/* Adding text segment below vertical Mobile Gamers barchart */ 
addTextSegment(textBelowVBarMobileInput, xOffSet, 2720)

/* Draws Pie Chart for Online games */ 
drawPieChart(onlineGamePieInput, pieChartFnInput[0])

/* Draws Pie chart for Mobile games */ 
drawPieChart(mobileGamePieInput, pieChartFnInput[1])

/* Adding legends under Pie charts */
addLegends(legendsInput[0])
addLegends(legendsInput[1])
addLegends(legendsInput[2])

/* Adding text below Pie charts */
addTextSegment(textBelowPieChart, xOffSet, 3567)

/* Adding Video games sales Pie chart */
drawPieChart(salesPieInput, pieChartFnInput[2])

/* Adding legends for sales pie charts  */
addLegends(legendsInput[3])
addLegends(legendsInput[4])
addLegends(legendsInput[5])
addLegends(legendsInput[6])

/* Adding summary text after Sales Pie Chart */
addTextSegment(textBelowSalesPieInput, xOffSet, 4090)

/* Adding Angry bird image  */
renderImage("image11", renderImageFnInput[5])

/* Adding two lines that is separated by a star at the bottom of page */ 
addHorizontaLines(4409)

/* Adding Citation image */ 
renderImage("image12", renderImageFnInput[6])

/* Adding sources at the bottom */
addTextSegment(referenceTextInput, 447, 4477)







