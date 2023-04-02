var email = 'example@gmail.com';
var blackList = ['serdiuk018@gmail.com', 'marlin8808@gmail.com', 'example@gmail.com', 'example2@gmail.com', 'example3@gmail.com', 'example4@gmail.com'];

function filter(email, blackList) {
    return blackList.includes(email) ? 'Емейл находится в черном списке' : 'Этого емейла нет в черном списке';
}

export default filter;