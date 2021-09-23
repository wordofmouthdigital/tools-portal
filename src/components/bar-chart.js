import React, { Component } from "react"
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

class BarChart extends Component {

    componentDidMount() {
      let propData = this.props.data;
      am4core.ready(function() {

        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end
        
        // Create chart instance
        var chart = am4core.create("chartdiv", am4charts.XYChart);
        
        
        // Add data
        chart.data = propData;
        
        // Create axes
        var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "month";
        categoryAxis.renderer.grid.template.location = 0;
        
        
        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.inside = false;
        valueAxis.renderer.labels.template.disabled = false;
        valueAxis.min = 0;
        
        // Create series
        function createSeries(field, name) {
          
          // Set up series
          var series = chart.series.push(new am4charts.ColumnSeries());
          series.name = name;
          series.dataFields.valueY = field;
          series.dataFields.categoryX = "month";
          series.sequencedInterpolation = true;
          
          // Make it stacked
          series.stacked = true;
          
          // Configure columns
          series.columns.template.width = am4core.percent(60);
          series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{categoryX}: {valueY}";
          
          // Add label
          var labelBullet = series.bullets.push(new am4charts.LabelBullet());
          labelBullet.label.text = "{valueY}";
          labelBullet.locationY = 0.5;
          labelBullet.label.hideOversized = true;
          
          return series;
        }
        
        createSeries("impressions", "Impressions");
        createSeries("users", "Users");
        createSeries("totalSales", "Total Sales");
        createSeries("revenue", "Revenue");
        createSeries("profit", "Profit");
        
        // Legend
        chart.legend = new am4charts.Legend();
        
        }); // end am4core.ready()
    }
  
    componentWillUnmount() {
      if (this.chart) {
        this.chart.dispose();
      }
    }
  
    render() {      
      return <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
    }
}

export default BarChart