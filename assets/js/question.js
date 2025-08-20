var questions = [
    "What sport have you ever practiced?",
    "Are you practicing any sport now?",
    "Are you a fan of any sport?",
    "Do you prefer team sports or individual sports?",
    "Do you have any goals regarding the sport your currently doing?",
    "How often do you train?",
    "At what level do you practice sports?",
    "What are your short term goals?",
    "What are your middle term goals?",
    "What are your long term dreams?",
    "Where do you wanna live?\nWhat is your dream city/place?",
    "What is your dream job?",
    "Do you wanna have a family?",
    "Do you wanna have kids?",
    "Do you have any hobbies?",
    "What do you do in your free time?",
    "How do you manage your free time to enjoy hobbies?",
    "How long have you been doing your hobby?",
    "What do you like about your hobby?",
    "Is your hobby sociable?",
    "Why don't you do something more sociable as a hobby?\nOr why don't you do something less sociable as a hobby?",
    "Where have you ever been?",
    "What kind of vacation do you enjoy?",
    "What do you like to do when you travel?",
    "What are the 5 best places you have visited?",
    "Where are you gonna go next? Why?",
    "When was the first time you flew on an airplane?\nWhat was it like?",
    "Where did you grow up?",
    "Where have you ever lived?",
    "Who did you grow up with?",
    "How would you compare the place you grew up with the place you live now?",
    "What do you admire most about your mother?\nWhat do you admire most about your father?",
    "Do you have any siblings?",
    "How is your relationship with your siblings?",
    "What do you admire most about your siblings?",
    "What was your favorite holiday growing up?",
    "Who in your family were/are you close with? Why?\nIn particular other than your parents or siblings?",
    "Did you have any family traditions associated with holidays?",
    "Did your family ascribe to any religion?\nWhat role did this play in your life growing up?",
    "Do you know how you got your name?",
    "Are there any games or toys you particularly remember playing with?",
    "Did you have any significant relationships as a teenager?",
    "Who was your first kiss? How did it happen?",
    "Do you have a partner?",
    "Do you have kids?",
    "Do you have a pet?",
    "What is happiness?",
    "How do you describe yourself?",
    "Do you wanna have a partner?",
    "How do you imagine your partner?",
    "What’s your favorite quality about yourself?\nLeast favorite?",
    "When do you feel the safest?",
    "Who do you admire most and why?",
    "What’s the quickest way someone can lose your trust?",
    "Is it easy for you to accept help from people?",
    "Do you live by any particular mantra?",
    "How do you hope people describe you?",
    "What do you think makes someone a good person?",
    "If you have the opportunity to know the future,\n what would you want to know?",
    "What is the biggest compliment you can give someone?",
    "If you had the opportunity to redesign society,\nwhat would you change?",
    "What’s your least favorite part about being you?",
    "What’s a dealbreaker for you in a relationship?",
    "Do you like small talk?",
    "Do you talk to yourself?\nHow do you talk to yourself?\nDo you have a name for your inner voice?",
    "What is the weirdest thing in your home?",
]

function changeQuestion() {
    var question = document.getElementById('question')
    q = questions[Math.floor(Math.random() * questions.length)]
    question.innerHTML = q
}

document.addEventListener('DOMContentLoaded', function() {
    changeQuestion()

    document.getElementById('next-question').addEventListener('click', function() {
        changeQuestion()
    })
})
