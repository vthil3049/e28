<template>
  <div class='text-center'>
    <h2>{{ title }}</h2>
    <h4>{{event_date}} at Nashua High School North Auditorium</h4>
    <h6 class='text-center text-danger'>Come see our talented students in action with a half hour musical by our talented teachers too</h6>
    <h5 class="text-info font-weight-bold">Start time: 3:00 pm sharp. Seating begins at 2:30pm</h5>
    <!-- <h6>We have {{getItemCount()}} registrations so far</h6> -->
    <div class="event-details container-fluid row">
      <div class="col-sm">
        <video width="480"  autoplay loop>
          <source src="@/assets/SchoolTalentShowSquareVideo-MadewithPosterMyWall.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="col-sm">
          <h3 class='text-info'>Tickets</h3>
          <h5>Early bird rates until <span class='text-success'>9/28</span></h5>
          <h5>Regular rates available until <span class='text-danger'>11/1</span></h5>
          <h5>Event day prices apply after <span class='text-danger font-weight-bold'>11/1</span></h5>
          <table class="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col">Category</th>
                <th scope="col">Early bird</th>
                <th scope="col">Regular</th>
                <th scope="col">Event day</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Students(K-12)</td>
                <td>$5</td>
                <td>$7</td>
                <td>$10</td>
              </tr>
              <tr>
                <td>Adults</td>
                <td>$10</td>
                <td>$12</td>
                <td>$15</td>
              </tr>
            </tbody>
          </table>
          <div class='text-info'>
            <address>
              For tickets email <a href="mailto:gsylvie@example.com">Mrs.Gail Sylvie</a>.<br>
            </address>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: 'HomePage',
    props: {
      msg: String
    },
    data: function(){
      return {
        title: "Gate City Fall Event",
        event_date: "7th November 2020"
      }
    },
    computed: {
      itemCount: function(){
        return this.$store.getters.getItemCount();
      }
    },
    methods: {
      getItemCount: function(){
        return this.$store.getters.getItemCount();
      }
    }
  }
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
