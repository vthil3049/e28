<!-- <a target="_blank" href="https://icons8.com/icons/set/music">Music icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> -->
<template>
  <div class='text-center'>
    <h1>{{ credits }}</h1>
    <h2>Nashua High School Talent Show</h2>
    <h3>Our fabulous organizing team</h3>
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <ul  class="list-group">
            <h4 class='text-center'>Staff</h4>
            <li v-for="staff in staffList" v-bind:key="staff"  class="list-group-item">
              {{staff}}
            </li>
          </ul>
        </div>
        <div class="col-sm">
          <h4 class='text-center'>Students</h4>
          <li v-for="student in studentList" v-bind:key="student.name"  class="list-group-item">
            {{student.name}}, Grade:{{student.grade}}
          </li>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
const faker = require('faker');
import {getRndInteger} from '@/common/utils';

export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  data: function(){
    return {
      title: "Now Playing",
      credits: "Thanks to the staff",
      staffCount: 6,
      studentCount: 8,
      staffList:[],
      studentList:[]

    }
  },
  mounted: function() {
    for(let i=0; i < this.staffCount; i++){
      this.staffList.push(faker.name.findName());
    }
    for(let i=0; i < this.studentCount; i++){
      this.studentList.push({'name':faker.name.firstName()+" "+faker.name.lastName(), 'grade': getRndInteger(9,12)});
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
