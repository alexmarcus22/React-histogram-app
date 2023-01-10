# React App - Posts Histogram & Chart

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Commits & Steps

### First commit

#### Created repo, init project with create-react-app.

### Second commit and third commit

#### Added Apollo API, creating getPosts query for Api CALL
#### Creating Page component
#### I used useLazyQuery to fetch the data from API call on click to handle the loading and data. Data is passed to Histogram component.
#### Created Histogram component which receives the data as props. I made an array "month" which represents  all months. sortPosts which sorts all received posts by timestamp(createdAt) from january to december. Initialized an array totalPostsEachMonth with 12 x 0 and counted the sorted posts for each month. I initialized xScale, yScale(maxim first, minim last) with given values. To show the data, I iterate over the months array and I created constant to show the bars/values over the axis. And I added xAxis and yAxis after those iterations.