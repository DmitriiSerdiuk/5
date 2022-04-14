var email = 'example@gmail.com';
var blackList = ['serdiuk018@gmail.com', 'marlin8808@gmail.com', 'example@gmail.com', 'example2@gmail.com', 'example3@gmail.com', 'example4@gmail.com'];

function filter() {
    for (let i = 0; i < 1; ++i) {
        console.log(blackList.includes(email) === true ? 'Емейл находится в черном списке' : 'Этого емейла нету в черном списке ');
    }
}
filter();