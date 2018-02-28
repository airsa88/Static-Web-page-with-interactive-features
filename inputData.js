/* 
@Author - Antony

Input data for the static and interactive web page is given in this file in JSON format.

*/

/* Page Title text input */ 
var titlePageInput =	[
				    {
				        "text": "VIDEO GAMES: AN INDUSTRY IN TRANSITION",
				        "class": "titlePage-text"
				    }
				]


/* Text segment below title text */
var textBelowTitleInput = [
						    {
						        "text": "PHYSICAL RETAIL SALES ",
						        "class": "red-text"
						    },
						    {
						        "text": "OF COMPUTER AND VIDEO GAMES ARE"
						    },
						    {
						        "text": "CURRENTLY ON THEIR ",
						        "x": 0,
						        "dy": "1.0em"
						    },
						    {
						        "text": "LOWEST LEVEL ",
						        "class": "red-text"
						    },
						    {
						        "text": "SINCE 2006."
						    },
						    {
						        "text": "U.S. COMPUTER AND VIDEO GAME SALES (PHYSICAL RETAIL)",
						        "x": 0,
						        "dy": "2.5em"
						    },
						    {
						        "text": "in billion U.S. dollors",
						        "class": "small-text",
						        "x": 0,
						        "dy": "1.25em"
						    }
						]

/* Vertical bar chart input data for Computer and Video game sales in US */
var vBarSalesInput = [
				    {
				        "year": 2001,
				        "value": 6
				    },
				    {
				        "year": 2002,
				        "value": 6.9
				    },
				    {
				        "year": 2003,
				        "value": 7
				    },
				    {
				        "year": 2004,
				        "value": 7.3
				    },
				    {
				        "year": 2005,
				        "value": 6.8
				    },
				    {
				        "year": 2006,
				        "value": 7.3
				    },
				    {
				        "year": 2007,
				        "value": 9.5
				    },
				    {
				        "year": 2008,
				        "value": 11.6
				    },
				    {
				        "year": 2009,
				        "value": 10.5
				    },
				    {
				        "year": 2010,
				        "value": 10.1
				    },
				    {
				        "year": 2011,
				        "value": 9.2
				    }
				]

/* Text segment below Vertical barchart sales data */
var textBelowVBarSalesInput = [
						    {
						        "text": "PHYSICAL SALES ",
						        "class": "red-text"
						    },
						    {
						        "text": "STILL MAKE UP "
						    },
						    {
						        "text": "THE LION'S SHARE ",
						        "class": "red-text"
						    },
						    {
						        "text": "OF GAMING "
						    },
						    {
						        "text": "SOFTWARE REVENUE, BUT ",
						        "x": 0,
						        "dy": "1.0em"
						    },
						    {
						        "text": "DIGITAL DELIVERY ",
						        "class": "red-text"
						    },
						    {
						        "text": "IS BECOMING "
						    },
						    {
						        "text": "INCREASINGLY IMPORTANT.",
						        "class": "red-text",
						        "x": 0,
						        "dy": "1.0em"
						    },
						    {
						        "text": "DIGITAL VS. PHYSICAL SALES",
						        "x": 0,
						        "dy": "2.5em"
						    },
						    {
						        "text": "in %",
						        "class": "small-text",
						        "x": 0,
						        "dy": "1.25em"
						    }
						]

/* Horizontal bar chart data for Digital vs Physical Sales */
var hBarSalesInput = [
					{
					"year": 2009,
					"physical": 80,
					"digital": 20
				   },
				   {
					"year": 2010,
					"physical": 72,
					"digital": 28
				   },
				   {
					"year": 2011,
					"physical": 69,
					"digital": 31
				   }
			  ]

/* Text segment values below horizontal sales barchart */
var textBelowHBarInput = [
						    {
						        "text": "* includes subscriptions, digital full games, add-on content, mobile apps and social net",
						        "class": "star-text"
						    },
						    {
						        "text": "work gaming",
						        "dy": "1.20em",
						        "x": 12,
						        "class": "star-text"
						    },
						    {
						        "text": "FOR NOW, ",
						        "x": 0,
						        "dy": "2.6em"
						    },
						    {
						        "text": "CONSOLES REMAIN THE MOST POPULAR ",
						        "class": "red-text"
						    },
						    {
						        "text": "GAMING"
						    },
						    {
						        "text": "DEVICES IN THE U.S.",
						        "x": 0,
						        "dy": "0.98em"
						    },
						    {
						        "text": "U.S. HOUSEHOLDS THAT OWN AT LEAST ONE OF THE FOLLOWING",
						        "x": 0,
						        "dy": "2.5em"
						    },
						    {
						        "text": "DEVICES PLAY GAMES ON THEIR...",
						        "x": 0,
						        "dy": "1.0em"
						    },
						    {
						        "text": "in %",
						        "class": "small-text",
						        "x": 0,
						        "dy": "1.25em"
						    }
						]

/* Arcs input data with Household device images */
var arcInput = [
			    {
			        "name": "CONSOLE",
			        "percent": 70,
			        "angle": 2.4 * Math.PI,
			        "image": "image5",
			        "imageWidth": 87,
			        "imageHeight": 77
			    },
			    {
			        "name": "PC",
			        "percent": 65,
			        "angle": 2.3 * Math.PI,
			        "image": "image6",
			        "imageWidth": 122,
			        "imageHeight": 80
			    },
			    {
			        "name": "SMARTPHONES",
			        "percent": 38,
			        "angle": 1.75 * Math.PI,
			        "image": "image7",
			        "imageWidth": 57,
			        "imageHeight": 88
			    },
			    {
			        "name": "DEDICATED HANDHELD SYSTEM",
			        "percent": 35,
			        "angle": 1.675 * Math.PI,
			        "image": "image8",
			        "imageWidth": 100,
			        "imageHeight": 56
			    },
			    {
			        "name": "WIRELESS DEVICE",
			        "percent": 26,
			        "angle": 1.5 * Math.PI,
			        "image": "image9",
			        "imageWidth": 89,
			        "imageHeight": 105
			    }
			]

/* Text segment values below Household Arc */
var textBelowArcInput = [
						    {
						        "text": "BUT ",
						        "x": 0,
						        "y": 2110
						    },
						    {
						        "class": "red-text",
						        "text": "SMARTPHONE GAMING "
						    },
						    {
						        "text": "IS EXPECTED TO GET BIGGER IN THE"
						    },
						    {
						        "x": 0,
						        "dy": "0.98em",
						        "text": "NEXT FEW YEARS."
						    },
						    {
						        "dy": "2.5em",
						        "x": 0,
						        "text": "U.S. MOBILE GAMERS*"
						    },
						    {
						        "text": "in millions",
						        "x": 0,
						        "class": "small-text",
						        "dy": "1.25em"
						    }
						]			

/* Vertical bar chart input values for US Mobile Gamers */
var vBarMobileInput = [
				    {
				        "year": 2011,
				        "value": 80
				    },
				    {
				        "year": 2012,
				        "value": 103
				    },
				    {
				        "year": 2013,
				        "value": 122
				    },
				    {
				        "year": 2014,
				        "value": 140
				    },
				    {
				        "year": 2015,
				        "value": 158
				    },
				    {
				        "year": 2016,
				        "value": 175
				    }
				]

/* Text segment values below vertical Mobile Gamers barchart */
var textBelowVBarMobileInput = [
						    {
						        "x": 0,
						        "y": 2720
						    },
						    {
						        "class": "star-text",
						        "text": "* mobile phone users who play games on mobile phones at least once per month"
						    },
						    {
						        "text": "CASUAL GAMERS ",
						        "dy": "2.65em",
						        "x": 0,
						        "class": "red-text"
						    },
						    {
						        "text": "ARE SHIFTING TO LOW-COST ONLINE AND SMART-"
						    },
						    {
						        "text": "PHONE GAMES.",
						        "dy": "1.0em",
						        "x": 0
						    },
						    {
						        "text": "TYPES OF ",
						        "dy": "2.5em",
						        "x": 0
						    },
						    {
						        "text": "ONLINE ",
						        "class": "red-text"
						    },
						    {
						        "text": "GAMES"
						    },
						    {
						        "text": "TYPES OF ",
						        "dx": "4.8em"
						    },
						    {
						        "text": "MOBILE ",
						        "class": "red-text"
						    },
						    {
						        "text": "GAMES"
						    },
						    {
						        "text": "PLAYED MOST OFTEN",
						        "x": 0,
						        "dy": "1.10em"
						    },
						    {
						        "text": "PLAYED MOST OFTEN",
						        "dx": "7.1em"
						    },
						    {
						        "x": 0,
						        "dy": "1.25em",
						        "text": "in %",
						        "class": "small-text"
						    },
						    {
						        "text": "in %",
						        "class": "small-text",
						        "dx": "30.15em"
						    }
						]


/* Input Pie chart values for Online games */
var onlineGamePieInput = [
							{ 
								"color": "red", 
								"percent": 42,
								"name": "PUZZLE, BOARD GAME, GAME SHOW, TRIVIA, CARD GAMES"
							},
			 				{ 
			 					"color": "black", 
			 					"percent": 25,
			 					"name": "ACTION, SPORTS, STRATEGY, ROLE-PLAYING" 
			 				},
			 				{ 
			 					"color": "#E1E2E4", 
			 					"percent": 33,
			 					"name": "OTHER"
			 				}
						]

/* Input Pie chart values for Mobile games */
var mobileGamePieInput = [
							{ 
								"color": "red", 
								"percent": 47,
								"name": "PUZZLE, BOARD GAME, GAME SHOW, TRIVIA, CARD GAMES"
							},
			 				{ 
			 					"color": "black", 
			 					"percent": 12,
			 					"name": "ACTION, SPORTS, STRATEGY, ROLE-PLAYING" 
			 				},
			 				{ 
			 					"color": "#E1E2E4",
			 					"percent": 41,
			 					"name": "OTHER" 
			 				}
			 			]


/* Text segment input values below Pie chart */
var textBelowPieChart = [
							    {
							        "text": "BUT VIDEO GAME SALES ARE STILL DRIVEN BY "
							    },
							    {
							        "text": "CORE GAMERS",
							        "class": "red-text"
							    },
							    {
							        "text": "."
							    },
							    {
							        "text": "VIDEO GAME SALES 2011, BY GENRE",
							        "x": 0,
							        "dy": "2.5em"
							    },
							    {
							        "text": "in %",
							        "class": "small-text",
							        "x": 0,
							        "dy": "1.25em"
							    }
							]

/* Video Games Sales piechart values */
var salesPieInput = [
					    {
					        "color": "red",
					        "percent": "4.0",
					        "name": "CASUAL GAMES"
					    },
					    {
					        "color": "black",
					        "percent": "43.8",
					        "name": "ACTION, SPORTS, STRATEGY, ROLE-PLAYING"
					    },
					    {
					        "color": "#9B9C9E",
					        "percent": "18.4",
					        "name": "SHOOTER"
					    },
					    {
					        "color": "#E1E2E4",
					        "percent": "33.7",
					        "name": "OTHER"
					    }
					]

/* Summary text after Sales Pie Chart */
var textBelowSalesPieInput = [
						    {
						        "text": "SMARTPHONE GAMES SUCH AS "
						    },
						    {
						        "text": "ANGRY BIRDS CAN",
						        "class": "red-text"
						    },
						    {
						        "text": "BE EXTREMELY POPULAR",
						        "x": 0,
						        "dy": "1.0em"
						    },
						    {
						        "text": ", BUT "
						    },
						    {
						        "text": "THE BIG MONEY ",
						        "class": "red-text"
						    },
						    {
						        "text": "IS"
						    },
						    {
						        "text": "STILL IN ",
						        "x": 0,
						        "dy": "1.0em"
						    },
						    {
						        "text": "TRADITIONAL VIDEO GAMES: ",
						        "class": "red-text"
						    },
						    {
						        "text": "ROVIO, MAKER OF THE ANGRY BIRDS FRANCHISE, POSTED",
						        "x": 0,
						        "dy": "1.52em"
						    },
						    {
						        "text": "$106.3 MILLION ",
						        "class": "red-text",
						        "x": 0,
						        "dy": "1.0em"
						    },
						    {
						        "text": "REVENUE IN 2011."
						    },
						    {
						        "text": "CALL OF DUTY: MODERN WARFARE 3, THE BEST-SELLING VIDEO",
						        "x": 0,
						        "dy": "1.52em"
						    },
						    {
						        "text": "GAME OF 2011, REACHED ",
						        "x": 0,
						        "dy": "1.0em"
						    },
						    {
						        "text": "$1 BILLION ",
						        "class": "red-text"
						    },
						    {
						        "text": "IN SALES AFTER 16 DAYS."
						    }
						]


/* Reference text values */
var referenceTextInput = [
						    {
						        "text": "SOURCES: ENTERTAINMENT SOFTWARE ASSOCIATION,",
						        "class": "legend-text"
						    },
						    {
						        "text": "NPD GROUP, ROVIO, ACTIVISION BLIZZARD, EMARKETER",
						        "class": "legend-text",
						        "x": -11,
						        "dy": "1.1em"
						    }
						]


