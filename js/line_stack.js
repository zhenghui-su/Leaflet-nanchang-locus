			var mycharts = echarts.init(document.getElementById("line"));
			 option = {
				// backgroundColor: "#000000",
				title: {
					text: '快速路服务水平三比对曲线'
				},
				tooltip: {
					trigger: 'axis'
				},
				legend: {
					textStyle: {
					            color: '#90979c',
					        },
					data: ['实际值', '预测值1', '预测值2']
				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
				toolbox: {
					feature: {
						saveAsImage: {}
					}
				},
				xAxis: {
					type: 'category',
					boundaryGap: false,
					scale: true,
					data: ['400km', '100km', '500km', '200km', '600km', '300km', '700km']
				},
				yAxis: {
					type: 'value',
					scale: true,

				},
				series: [{
						name: '预测值1',
						type: 'line',
						stack: 'Total',
						smooth: true,
						data: [5287, 1322, 6608, 2643, 7930, 3965, 9252]
					},
					{
						name: '预测值2',
						type: 'line',
						stack: 'Total',
						smooth: true,
						data: [5356, 1339, 6695, 2678, 8034, 4017, 9373]
					},
					{
						name: '实际值',
						type: 'line',
						stack: 'Total',
						smooth: true,
						data: [6400, 1600, 7999, 3200, 9599, 4800, 11199]
					}

				]
			};
			mycharts.setOption(option)