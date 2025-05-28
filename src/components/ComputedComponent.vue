<template>
    <div>Employees Present {{ isEmployeesPresent }}</div>
    <div>User Present {{ isUserPresent }}</div>
    <div> {{ fullName }}</div>

    <div>{{ numbercreated.num }}</div>
    <button @[eventer]="increasevalue">{{ numbercreated.numbertitle }}</button>
      <button @[eventer]="decreasevalue">{{ numbercreated.numbertitle }}</button>
    <p>{{ numbercheck }}</p>
    <!-- Number checker -->


</template>
<script setup>
import {computed, reactive, ref} from 'vue';

const employees = reactive(['emp1', 'emp2']);

const isEmployeesPresent = computed(()=>{
    return employees.length ? 'Yes computed': 'No';
});

const userdata = reactive(['one', 'two']);

const isUserPresent = computed(()=>{
    return userdata.length ? 'Yes present': 'No';
});

const firstName = ref('Kartik');
const lastName = ref('Aswal');

// const fullName = computed(()=>{
//     return firstName.value + ' '+ lastName.value;
// });

const fullName = computed({
    get() {
        return firstName.value + ' ' + lastName.value;
    },
    set(newValue){
        [firstName.value, lastName.value] = newValue.split(' ');
    }
});
fullName.value = 'hey saf';

const numbercreated = reactive({
    num:0,
    numbertitle : ref("check")
});

const eventer = 'click';

const increasevalue = () =>{
    numbercreated.num++
}

// number status checker 
const numbercheck = computed(()=>{
    return numbercreated.num%2 == 0 ? 'even':'odd';
})

const decreasevalue = () =>{
    numbercreated.num--;
}
</script>
