import * as React from 'react';
import useMeasure from 'react-use-measure';
import { scaleBand, scaleLinear } from '@visx/scale';
import { Group } from '@visx/group';
import { AxisLeft, AxisBottom } from '@visx/axis';
import { Bar } from '@visx/shape';
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  position: relative;
  width: 600px;
  height: 400px;
  min-width: 300px;
`;

const Histogram = ({ data }) => {
  const margin = 32;
  const [ref, bounds] = useMeasure();
  const defaultHeight = bounds.width || 100;
  const defaultWidth = bounds.height || 100;
  const allposts = data.allPosts;
  console.log("Posts: ", allposts);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  const sortNumber = (a, b) => {
    return a - b;
  }

  const getTotalMonths = d => d;
  const sortPosts = allposts.map(item => new Date(parseInt(item.createdAt)).getTime()).sort(sortNumber);
  const getAllMonths = d => new Date(d).getMonth();
  const totalPostsEachMonth = Array(12).fill(0);
  const allMonths = sortPosts.map(getAllMonths);

  allMonths.forEach((arr, i) => {
    totalPostsEachMonth[allMonths[i]]++;
  })

  console.log("Total Posts for each month: ", totalPostsEachMonth);

  const width = bounds.width || defaultWidth;
  const height = bounds.height || defaultHeight;

  const innerWidth = width - margin * 2;
  const innerHeight = height - margin * 2;

  const xScale = scaleBand({
    range: [margin, innerWidth],
    domain: months,
    padding: 0.2,
  })

  const yScale = scaleLinear({
    range: [innerHeight, margin],
    domain: [
      Math.min(...totalPostsEachMonth) - 1,
      Math.max(...totalPostsEachMonth)
    ],
  });


  return (
    <Wrapper>
      <Container>
        <svg
          ref={ref}
          width='100%'
          height='100%'
          viewBox={`0 0 ${width} ${height}`}
        >
          <Group>
            {
              months.map((d, i) => {
                const xValue = getTotalMonths(d);
                const barWidth = xScale.bandwidth();
                const barHeight = innerHeight - (yScale(totalPostsEachMonth[i]) ?? 0);
                const barX = xScale(xValue);
                const barY = innerHeight - barHeight;
                return (
                  <Bar
                    key={`bar-${xValue}`}
                    y={barY}
                    x={barX}
                    width={barWidth}
                    height={barHeight}
                    fill="orange"
                  />
                )
              })
            }
          </Group>
          <Group>
            <AxisBottom top={innerHeight} scale={xScale} />
          </Group>
          <Group>
            <AxisLeft left={margin} scale={yScale} />
          </Group>
        </svg >
      </Container>
    </Wrapper>
  )
}

export default Histogram;