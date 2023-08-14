# MyZERO

GNEC (Global NGO Executive Committee) Hackathon project by Taehee and Rina
<br />
Theme: United Nations Sustainable Development Goals (UN SDGs)

### Our goal

We are excited to introduce our new app 'MyZERO', which was created with a mission to address the global issue of single-use plastic waste and promote the use of reusable personal containers. We noticed that some individuals are already making efforts to carry reusable containers and be mindful of the environment. However, we wanted to find a way to encourage even more people to actively participate in this eco-friendly initiative.

Thus, we came up with a unique concept that allows users to track their efforts, engage in healthy competition with others, and be rewarded for their eco-conscious actions. Through our point accumulation system, users earn points for their environmentally friendly choices. These points continuously accumulate, but each month, a badge is reset, and users can see a virtual tree grow based on their points. This visual representation encourages them to keep up their efforts and witness the impact of their actions over time.

To foster a sense of community and friendly competition, we introduced a regional competition system. Users can check how many points others in their neighborhood have collected, and this fosters a spirit of camaraderie and motivates everyone to participate more actively.

One of our standout features is the ability to redeem points for various products. These products are all reusable alternatives to commonly used single-use items, contributing to reducing plastic waste. By partnering with local businesses, we hope to support the community and promote sustainable choices.

To ensure authenticity, Users can receive certification from restaurants or cafes that they have used reusable containers. This feature grants them additional points, making the process transparent and fair. We plan to collaborate with point-of-sale companies to streamline this aspect in the future.

### Notable Features

- Regional leaderboards showcasing the top 10 users in each area based on their monthly points.
- When uploading a receipt with the certification that the reusable container has been used, it automatically recognizes and provides points. (Coming Soon)
- Personal point history for the past four months, allowing users to track their progress.
- Rewarding users with a tree badge for amassing more than 101 points in a month.
- The "Store" menu, where users can explore and purchase products with their accumulated points.
- An upcoming "MyBuy" tab, where users can view and exchange their purchased items. (Coming soon)
- Responsive design

We are thrilled to provide a platform that empowers users to make a positive impact on the environment, one reusable choice at a time. With your support, we believe that together, we can create a greener and more sustainable future for everyone.

## Language

- React
- Sass
- PostgreSQL
- Express.js
- Chart.js

## Duration

July 17 ~ Aug 05

## Prototype

Figma Link: <br />
https://www.figma.com/file/ZMbEnoDTY79aAH94zVrxOp/GNEC-Hackathon?type=design&node-id=0%3A1&mode=design&t=C67nGPi8Ic6VGlSc-1

## Members

### Taehee Kim

#### Full Stack Developer

k.tehi21@gmail.com  
https://www.linkedin.com/in/taehee-kim-van0216/  
https://github.com/ktehi21

##### What we did
- Backend Development
- Logo design

### Rina Cheon

#### Frontend Developer

hlyni22@gmail.com  
www.hyerincheon.ca  
www.linkedin.com/in/rinaacheon  
https://github.com/Hyerin22

##### What we did
- Frontend Development
- UX/UI Design
<br />
<br />
<br />

## Result

- Main page
  !["Main page"](https://raw.githubusercontent.com/ktehi21/MyZERO/main/react-front-end/assets/MyZERO01_Home.png)

- Community
  !["Community"](https://raw.githubusercontent.com/ktehi21/MyZERO/main/react-front-end/assets/MyZERO02_Community.png)

- City Detail
  !["City Detail"](https://raw.githubusercontent.com/ktehi21/MyZERO/main/react-front-end/assets/MyZERO03_City.png)

- Store
  !["Store"](https://raw.githubusercontent.com/ktehi21/MyZERO/main/react-front-end/assets/MyZERO04_Store.png)

- MyBuy
  !["MyBuy"](https://raw.githubusercontent.com/ktehi21/MyZERO/main/react-front-end/assets/MyZERO05_MyBuy.png)

- Setting
  !["Setting"](https://raw.githubusercontent.com/ktehi21/MyZERO/main/react-front-end/assets/MyZERO06_Setting.png)
<br />
<br />
<br />


## Responsive
<div style="display: grid; grid-template-column: repeat(3, 1fr)">
  <img src="/react-front-end/assets/MyZERO01_Home_mob.png" alt="Main" style= "width: 250px" />
  <img src="/react-front-end/assets/MyZERO02_Community_mob.png" alt="Main" style= "width: 250px" />
  <img src="/react-front-end/assets/MyZERO03_City_mob.png" alt="Main" style= "width: 250px" />
  <img src="/react-front-end/assets/MyZERO04_Store_mob.png" alt="Main" style= "width: 250px" />
  <img src="/react-front-end/assets/MyZERO05_MyBuy_mob.png" alt="Main" style= "width: 250px" />
  <img src="/react-front-end/assets/MyZERO06_Setting_mob.png" alt="Main" style= "width: 250px" />
</div>
<br />
<br />
<br />


## **Getting Started**

To get started with the repository [MyZERO](https://github.com/ktehi21/MyZERO), follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory:

3. Inside the project directory, you will find two main directories: `express-backend` and `react-frontend`.

4. First, let's set up the Express backend:

- Navigate to the `express-backend` directory:

  ```
  cd express-backend
  ```

- Create a `.env` file based on the provided `.env.example` file. Update the configuration settings as needed.

- Update the .env file with your correct local information

  - username: `myzero`
  - password: `myzero`
  - database: `myzero`  
    (In case of you want to use the data that is ready,  
    use the psql, inside the myzero DB  
     \i db/schema/tables.sql  
     \i db/seeds/seeds.sql  
    )

- Install the dependencies by running the following command:

  ```
  npm install
  ```

- Once the dependencies are installed, start the backend server:
  ```
  npm start
  ```

5. Now, let's set up the React frontend:

- Open a new terminal or command prompt window.

- Navigate to the `react-frontend` directory:

  ```
  cd ../react-frontend
  ```

- Install the dependencies by running the following command:

  ```
  npm install
  ```

- Once the dependencies are installed, start the frontend server:
  ```
  npm start
  ```

6. After following these steps, the backend server will be running on one port, and the frontend server will be running on another port. You can access the application by opening your web browser and visiting `http://localhost:3000` (or a different port if specified).

Now you're ready to explore and use the features of the [MyZERO](https://github.com/ktehi21/MyZERO) repository. Enjoy!
