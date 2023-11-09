// Data array
const data = [
    { day: 1, value: 66 },
    { day: 2, value: 64 },
    { day: 3, value: 42 },
    { day: 4, value: 76 },
    { day: 5, value: 82 },
    { day: 6, value: 23 },
    { day: 7, value: 57 },
    { day: 8, value: 31 },
    { day: 9, value: 99 },
    { day: 10, value: 69 },
    { day: 11, value: 4 },
    { day: 12, value: 68 },
    { day: 13, value: 60 },
    { day: 14, value: 62 },
    { day: 15, value: 99 }
  ];
  
  // Set dimensions and margins for the chart
  const margin = { top: 60, right: 20, bottom: 30, left: 40 };
  const width = 600 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;
  
  // Append SVG object to the body, set dimensions, and create a group element (g)
  const svg = d3.select("#chart")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);
  
  // X scale
  const x = d3.scaleBand()
      .domain(data.map(d => d.day))
      .range([0, width])
      .padding(0.1);
  
  // Y scale
  const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value)])
      .range([height, 0]);
  
  // Append x axis to svg and change its color to white
  svg.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .selectAll("path, line")
      .style("stroke", "#FFFFFF");
  
  // Change the color of the axis ticks and text to white
  svg.selectAll(".tick text").style("fill", "#FFFFFF");
  
  // Append y axis to svg and change its color to white
  svg.append("g")
      .call(d3.axisLeft(y))
      .selectAll("path, line")
      .style("stroke", "#FFFFFF");
  
  // Change the color of the axis ticks and text to white
  svg.selectAll(".tick text").style("fill", "#FFFFFF");
  
  // Chart title with white color
  svg.append("text")
      .attr("x", (width / 2))             
      .attr("y", 0 - (margin.top / 2))
      .attr("text-anchor", "middle")  
      .style("font-size", "20px") 
      .style("fill", "#FFFFFF") // Set the text color to white
      .text("November");
  
  // Create the bars with white color
  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", d => x(d.day))
      .attr("y", d => y(d.value))
      .attr("width", x.bandwidth())
      .attr("height", d => height - y(d.value))
      .attr("fill", "#FFFFFF"); // Set the fill color to white