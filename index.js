// var fulldiv=document.getElementById('app')
const container=document.createElement('div')
container.className='container'

const navbar=document.createElement('nav')
navbar.className='navbar'

const navContent=document.createElement('div')
navContent.className='nav-content'

const logo=document.createElement('div')
logo.className='logo'
logo.innerHTML='⚽ TurfBook'

const navLinks=document.createElement('ul')
navLinks.className='nav-links'

const pageContent=document.createElement('div')
pageContent.className='page-content'

// Global Variables
let currentPage='home'
let selectedSlots=[]
let bookedSlots=['09:00-10:00','15:00-16:00','18:00-19:00']
let isLoggedIn=false
let currentUser=null
let bookings=[]

// Home Page Elements
const hero=document.createElement('div')
hero.className='hero'

const heroTitle=document.createElement('h1')
heroTitle.innerHTML='Welcome to TurfBook'

const heroSubtitle=document.createElement('p')
heroSubtitle.innerHTML='Premium turf booking system for football enthusiasts'

const heroBtn=document.createElement('button')
heroBtn.className='btn'
heroBtn.innerHTML='Book Your Slot Now'

const features=document.createElement('div')
features.className='features'

const featureCard1=document.createElement('div')
featureCard1.className='feature-card'
const featureTitle1=document.createElement('h3')
featureTitle1.innerHTML='🏟️ Premium Facilities'
const featureDesc1=document.createElement('p')
featureDesc1.innerHTML='State-of-the-art artificial and natural grass turfs maintained to international standards with proper lighting and drainage systems.'

const featureCard2=document.createElement('div')
featureCard2.className='feature-card'
const featureTitle2=document.createElement('h3')
featureTitle2.innerHTML='⚡ Instant Booking'
const featureDesc2=document.createElement('p')  
featureDesc2.innerHTML='Quick and hassle-free online booking system. Select your preferred time slot and confirm your reservation in just a few clicks.'

const featureCard3=document.createElement('div')
featureCard3.className='feature-card'
const featureTitle3=document.createElement('h3')
featureTitle3.innerHTML='🕒 Flexible Timings'
const featureDesc3=document.createElement('p')
featureDesc3.innerHTML='Available from 6 AM to 10 PM daily. Choose from hourly slots that fit perfectly into your schedule and playing preferences.'

const featureCard4=document.createElement('div')
featureCard4.className='feature-card'
const featureTitle4=document.createElement('h3')
featureTitle4.innerHTML='💰 Affordable Rates'
const featureDesc4=document.createElement('p')
featureDesc4.innerHTML='Competitive pricing at just $50 per hour with no hidden charges. Special packages available for regular players and tournaments.'

const featureCard5=document.createElement('div')
featureCard5.className='feature-card'
const featureTitle5=document.createElement('h3')
featureTitle5.innerHTML='🏆 Professional Setup'
const featureDesc5=document.createElement('p')
featureDesc5.innerHTML='FIFA-standard turf dimensions with goal posts, changing rooms, equipment storage, and refreshment facilities for complete experience.'

const featureCard6=document.createElement('div')
featureCard6.className='feature-card'
const featureTitle6=document.createElement('h3')
featureTitle6.innerHTML='📱 Easy Management'
const featureDesc6=document.createElement('p')
featureDesc6.innerHTML='User-friendly interface to view, modify, or cancel bookings. Real-time availability updates and booking confirmations via email.'

// About Page Elements
const aboutContent=document.createElement('div')
aboutContent.className='about-content'

const aboutTitle=document.createElement('h2')
aboutTitle.className='page-title'
aboutTitle.innerHTML='About TurfBook'

const aboutPara1=document.createElement('p')
aboutPara1.innerHTML='<strong>TurfBook</strong>  is the leading turf booking platform in Chennai, connecting football enthusiasts with premium sporting facilities since 2020. We have transformed how players access quality turfs across the city, serving everyone from casual players to competitive teams.'

const aboutPara2=document.createElement('p')
aboutPara2.innerHTML=' Our strategically located turfs feature FIFA-standard artificial and natural grass surfaces, maintained by expert groundskeepers for optimal playing conditions year-round. Each facility offers modern amenities including changing rooms, showers, and secure parking.'
const aboutPara3=document.createElement('p')
aboutPara3.innerHTML='To make quality football facilities accessible and affordable for Chennai most vibrant sporting community while promoting fitness, teamwork, and the beautiful game.'

const aboutPara4=document.createElement('p')
aboutPara4.innerHTML='<strong>Our Mission:</strong> To make quality football facilities accessible and affordable for everyone while fostering a vibrant sporting community. We believe that sports bring people together and contribute to physical and mental well-being.'

const aboutPara5=document.createElement('p')
aboutPara5.innerHTML='Beyond just turf rental, we offer additional amenities including equipment rental, professional coaching sessions, tournament organization, and corporate event management. Our modern changing rooms, shower facilities, and on-site café ensure a complete and comfortable experience for all our visitors.'

// Contact Page Elements
const contactTitle=document.createElement('h2')
contactTitle.className='page-title'
contactTitle.innerHTML='Get In Touch'

const contactInfo=document.createElement('div')
contactInfo.className='contact-info'

const contactCard1=document.createElement('div')
contactCard1.className='contact-card'
const contactCardTitle1=document.createElement('h3')
contactCardTitle1.innerHTML='📞 Phone'
const contactCardContent1=document.createElement('p')
contactCardContent1.innerHTML='<strong>Main:</strong> +91 7305763285<br><strong>Booking:</strong> +91 9840123456'

const contactCard2=document.createElement('div')
contactCard2.className='contact-card'
const contactCardTitle2=document.createElement('h3')
contactCardTitle2.innerHTML='✉️ Email'
const contactCardContent2=document.createElement('p')
contactCardContent2.innerHTML='<strong>General:</strong> info@turfbook.com<br><strong>Bookings:</strong> book@turfbook.com'

const contactCard3=document.createElement('div')
contactCard3.className='contact-card'
const contactCardTitle3=document.createElement('h3') 
contactCardTitle3.innerHTML='📍 Address'
const contactCardContent3=document.createElement('p')
contactCardContent3.innerHTML='NO;31/48, Velachery main road<br>Kelambakkam<br>Chennai, Ch- 600067<br>India'

const contactCard4=document.createElement('div')
contactCard4.className='contact-card'
const contactCardTitle4=document.createElement('h3')
contactCardTitle4.innerHTML='🕒 Operating Hours'
const contactCardContent4=document.createElement('p')
contactCardContent4.innerHTML='<strong>Daily:</strong> 6:00 AM - 10:00 PM<br><strong>Booking Office:</strong> 8:00 AM - 8:00 PM'

// Contact Form Elements
const formContainer=document.createElement('div')
formContainer.className='form-container'

const formTitle=document.createElement('h3')
formTitle.innerHTML='Send us a Message'
formTitle.style.marginBottom='1.5rem'
formTitle.style.color='#2c3e50'
formTitle.style.textAlign='center'

const contactForm=document.createElement('form')
contactForm.id='contactForm'

const formGroup1=document.createElement('div')
formGroup1.className='form-group'
const label1=document.createElement('label')
label1.innerHTML='Full Name *'
label1.setAttribute('for','contactName')
const input1=document.createElement('input')
input1.type='text'
input1.id='contactName'
input1.required=true
input1.placeholder='Enter your full name'

const formGroup2=document.createElement('div')
formGroup2.className='form-group'
const label2=document.createElement('label')
label2.innerHTML='Email Address *'
label2.setAttribute('for','contactEmail')
const input2=document.createElement('input')
input2.type='email'
input2.id='contactEmail'
input2.required=true
input2.placeholder='Enter your email'

const formGroup3=document.createElement('div')
formGroup3.className='form-group'
const label3=document.createElement('label')
label3.innerHTML='Phone Number'
label3.setAttribute('for','contactPhone')
const input3=document.createElement('input')
input3.type='tel'
input3.id='contactPhone'
input3.placeholder='Enter your phone number'

const formGroup4=document.createElement('div')
formGroup4.className='form-group'
const label4=document.createElement('label')
label4.innerHTML='Subject *'
label4.setAttribute('for','contactSubject')
const select1=document.createElement('select')
select1.id='contactSubject'
select1.required=true
const option1=document.createElement('option')
option1.value=''
option1.innerHTML='Select a subject'
const option2=document.createElement('option')
option2.value='booking'
option2.innerHTML='Booking Inquiry'
const option3=document.createElement('option')
option3.value='facilities'
option3.innerHTML='Facility Information'
const option4=document.createElement('option')
option4.value='pricing'
option4.innerHTML='Pricing & Packages'
const option5=document.createElement('option')
option5.value='events'
option5.innerHTML='Corporate Events'
const option6=document.createElement('option')
option6.value='feedback'
option6.innerHTML='Feedback'
const option7=document.createElement('option')
option7.value='other'
option7.innerHTML='Other'

const formGroup5=document.createElement('div')
formGroup5.className='form-group'
const label5=document.createElement('label')
label5.innerHTML='Message *'
label5.setAttribute('for','contactMessage')
const textarea1=document.createElement('textarea')
textarea1.id='contactMessage'
textarea1.required=true
textarea1.placeholder='Enter your message here...'

const submitBtn=document.createElement('button')
submitBtn.type='submit'
submitBtn.className='btn'
submitBtn.innerHTML='Send Message'

// Booking Page Elements
const bookingContainer=document.createElement('div')
bookingContainer.className='form-container'

const bookingTitle=document.createElement('h2')
bookingTitle.innerHTML='Book Your Turf Slot'
bookingTitle.style.textAlign='center'
bookingTitle.style.marginBottom='2rem'
bookingTitle.style.color='#2c3e50'

const bookingForm=document.createElement('form')
bookingForm.id='bookingForm'

const bookingGroup1=document.createElement('div')
bookingGroup1.className='form-group'
const bookingLabel1=document.createElement('label')
bookingLabel1.innerHTML='Select Date *'
bookingLabel1.setAttribute('for','bookingDate')
const bookingInput1=document.createElement('input')
bookingInput1.type='date'
bookingInput1.id='bookingDate'
bookingInput1.required=true

const bookingGroup2=document.createElement('div')
bookingGroup2.className='form-group'
const bookingLabel2=document.createElement('label')
bookingLabel2.innerHTML='Select Turf *'
bookingLabel2.setAttribute('for','turfType')
const bookingSelect1=document.createElement('select')
bookingSelect1.id='turfType'
bookingSelect1.required=true
const bookingOption1=document.createElement('option')
bookingOption1.value=''
bookingOption1.innerHTML='Choose your preferred turf'
const bookingOption2=document.createElement('option')
bookingOption2.value='turf1'
bookingOption2.innerHTML='Turf 1 - Natural Grass (Rs.500/hour)'
const bookingOption3=document.createElement('option')
bookingOption3.value='turf2'
bookingOption3.innerHTML='Turf 2 - Artificial Grass (Rs.600/hour)'
const bookingOption4=document.createElement('option')
bookingOption4.value='turf3'
bookingOption4.innerHTML='Turf 3 - Premium Artificial (Rs.700/hour)'

const slotsGroup=document.createElement('div')
slotsGroup.className='form-group'
const slotsLabel=document.createElement('label')
slotsLabel.innerHTML='Available Time Slots'
const slotsInfo=document.createElement('p')
slotsInfo.innerHTML='Click on available slots to select them. Green = Selected, Red = Already Booked'
slotsInfo.style.marginBottom='1rem'
slotsInfo.style.color='#666'
slotsInfo.style.fontSize='0.9rem'
const slotsGrid=document.createElement('div')
slotsGrid.className='slot-grid'
slotsGrid.id='slotsGrid'

const bookingGroup3=document.createElement('div')
bookingGroup3.className='form-group'
const bookingLabel3=document.createElement('label')
bookingLabel3.innerHTML='Primary Contact Name *'
bookingLabel3.setAttribute('for','playerName')
const bookingInput3=document.createElement('input')
bookingInput3.type='text'
bookingInput3.id='playerName'
bookingInput3.required=true
bookingInput3.placeholder='Enter the main contact person\'s name'

const bookingGroup4=document.createElement('div')
bookingGroup4.className='form-group'
const bookingLabel4=document.createElement('label')
bookingLabel4.innerHTML='Contact Number *'
bookingLabel4.setAttribute('for','contactNumber')
const bookingInput4=document.createElement('input')
bookingInput4.type='tel'
bookingInput4.id='contactNumber'
bookingInput4.required=true
bookingInput4.placeholder='Enter your phone number'

const bookingGroup5=document.createElement('div')
bookingGroup5.className='form-group'
const bookingLabel5=document.createElement('label')
bookingLabel5.innerHTML='Team Size'
bookingLabel5.setAttribute('for','teamSize')
const bookingSelect2=document.createElement('select')
bookingSelect2.id='teamSize'
const teamOption1=document.createElement('option')
teamOption1.value='5'
teamOption1.innerHTML='5 players (5-a-side)'
const teamOption2=document.createElement('option')
teamOption2.value='7'
teamOption2.innerHTML='7 players (7-a-side)'
const teamOption3=document.createElement('option')
teamOption3.value='11'
teamOption3.innerHTML='11 players (Full team)'
teamOption3.selected=true
const teamOption4=document.createElement('option')
teamOption4.value='other'
teamOption4.innerHTML='Other'

const bookingBtn=document.createElement('button')
bookingBtn.type='submit'
bookingBtn.className='btn'
bookingBtn.innerHTML='Confirm Booking (0 slots)'
bookingBtn.id='bookingBtn'

const bookingSummary=document.createElement('div')
bookingSummary.className='booking-summary'
bookingSummary.id='bookingSummary'
bookingSummary.style.display='none'

// Login Page Elements
const loginContainer=document.createElement('div')
loginContainer.className='login-container'

const loginFormContainer=document.createElement('div')
loginFormContainer.className='form-container'

const loginTitle=document.createElement('h2')
loginTitle.innerHTML='Login to Your Account'
loginTitle.style.textAlign='center'
loginTitle.style.marginBottom='2rem'
loginTitle.style.color='#2c3e50'

const loginForm=document.createElement('form')
loginForm.id='loginForm'

const loginGroup1=document.createElement('div')
loginGroup1.className='form-group'
const loginLabel1=document.createElement('label')
loginLabel1.innerHTML='Email Address'
loginLabel1.setAttribute('for','loginEmail')
const loginInput1=document.createElement('input')
loginInput1.type='email'
loginInput1.id='loginEmail'
loginInput1.required=true
loginInput1.placeholder='Enter your email address'

const loginGroup2=document.createElement('div')
loginGroup2.className='form-group'
const loginLabel2=document.createElement('label')
loginLabel2.innerHTML='Password'
loginLabel2.setAttribute('for','loginPassword')
const loginInput2=document.createElement('input')
loginInput2.type='password'
loginInput2.id='loginPassword'
loginInput2.required=true
loginInput2.placeholder='Enter your password'

const loginBtn=document.createElement('button')
loginBtn.type='submit'
loginBtn.className='btn'
loginBtn.innerHTML='Login'
loginBtn.style.width='100%'
loginBtn.style.marginBottom='1rem'

// const demoInfo=document.createElement('div')
// demoInfo.className='demo-info'
// const demoText1=document.createElement('p')
// demoText1.innerHTML='<strong>Demo Mode:</strong> Use any email and password to login'
// const demoText2=document.createElement('p')
// demoText2.innerHTML='Try: demo@turfbook.com / password123'

// Auth Message Elements
const authMessage=document.createElement('div')
authMessage.className='auth-message'
const authTitle=document.createElement('h2')
authTitle.innerHTML='Authentication Required'
const authText=document.createElement('p')
authText.innerHTML='Please log in to access our booking system and reserve your preferred turf slots.'
const authBtn=document.createElement('button')
authBtn.className='btn'
authBtn.innerHTML='Login to Continue'

// Navigation Functions
function navigateTo(page){
    currentPage=page
    renderPage()
    window.scrollTo(0,0)
}

function toggleSlot(slot){
    if(bookedSlots.includes(slot)){
        return
    }
    
    const index=selectedSlots.indexOf(slot)
    if(index>-1){
        selectedSlots.splice(index,1)
    }else{
        selectedSlots.push(slot)
    }
    updateBookingDisplay()
}

function logout(){
    isLoggedIn=false
    currentUser=null
    selectedSlots=[]
    alert('You have been logged out successfully.')
    navigateTo('home')
}

function updateBookingDisplay(){
    const slotsGrid=document.getElementById('slotsGrid')
    const bookingBtn=document.getElementById('bookingBtn')
    const bookingSummary=document.getElementById('bookingSummary')
    
    if(slotsGrid){
        renderSlots()
    }
    
    if(bookingBtn){
        bookingBtn.innerHTML=`Confirm Booking (${selectedSlots.length} slot${selectedSlots.length!==1?'s':''})`
        bookingBtn.disabled=selectedSlots.length===0
    }
    
    if(bookingSummary){
        if(selectedSlots.length>0){
            bookingSummary.style.display='block'
            bookingSummary.innerHTML=`
                <strong>Booking Summary:</strong><br>
                <strong>Selected Slots:</strong> ${selectedSlots.join(', ')}<br>
                <strong>Duration:</strong> ${selectedSlots.length} hour${selectedSlots.length!==1?'s':''}<br>
                <strong>Rate:</strong> Rs.500 per hour<br>
                <strong>Total Cost:</strong> $${selectedSlots.length*50}
            `
        }else{
            bookingSummary.style.display='none'
        }
    }
}

function renderSlots(){
    const slotsGrid=document.getElementById('slotsGrid')
    if(!slotsGrid)return
    
    const timeSlots=[
        '06:00-07:00','07:00-08:00','08:00-09:00','09:00-10:00',
        '10:00-11:00','11:00-12:00','12:00-13:00','13:00-14:00',
        '14:00-15:00','15:00-16:00','16:00-17:00','17:00-18:00',
        '18:00-19:00','19:00-20:00','20:00-21:00','21:00-22:00'
    ]
    
    slotsGrid.innerHTML=''
    
    timeSlots.forEach(slot=>{
        const slotItem=document.createElement('div')
        slotItem.className='slot-item'
        
        if(bookedSlots.includes(slot)){
            slotItem.className+=' booked'
            slotItem.innerHTML=`${slot}<br><small>Booked</small>`
        }else if(selectedSlots.includes(slot)){
            slotItem.className+=' selected'
            slotItem.innerHTML=slot
        }else{
            slotItem.innerHTML=slot
        }
        
        slotItem.onclick=()=>toggleSlot(slot)
        slotsGrid.appendChild(slotItem)
    })
}

function submitBooking(){
    if(selectedSlots.length===0){
        alert('Please select at least one time slot.')
        return
    }

    const date=document.getElementById('bookingDate').value
    const turf=document.getElementById('turfType').value
    const playerName=document.getElementById('playerName').value
    const contactNumber=document.getElementById('contactNumber').value
    const teamSize=document.getElementById('teamSize').value

    if(!date||!turf||!playerName||!contactNumber){
        alert('Please fill in all required fields.')
        return
    }

    const booking={
        id:Date.now(),
        date:date,
        turf:turf,
        slots:[...selectedSlots],
        playerName:playerName,
        contactNumber:contactNumber,
        teamSize:teamSize,
        totalCost:selectedSlots.length*50,
        bookedAt:new Date().toISOString()
    }

    bookings.push(booking)
    bookedSlots.push(...selectedSlots)
    
    alert(`🎉 Booking Confirmed!\n\nBooking ID: #${booking.id}\nDate: ${date}\nTurf: ${turf}\nSlots: ${selectedSlots.join(', ')}\nTotal: $${booking.totalCost}\n\nThank you for choosing TurfBook!`)
    
    selectedSlots=[]
    renderPage()
}

function renderPage(){
    pageContent.innerHTML=''
    updateNavigation()
    
    if(currentPage==='home'){
        renderHomePage()
    }else if(currentPage==='about'){
        renderAboutPage()
    }else if(currentPage==='contact'){
        renderContactPage()
    }else if(currentPage==='booking'){
        renderBookingPage()
    }else if(currentPage==='login'){
        renderLoginPage()
    }
}

function updateNavigation(){
    navLinks.innerHTML=''
    
    const navItems=[
        {text:'Home',page:'home'},
        {text:'About Us',page:'about'},
        {text:'Contact',page:'contact'},
        {text:'Book Slot',page:'booking'},
        {text:isLoggedIn?'Logout':'Login',page:'login'}
    ]
    
    navItems.forEach(item=>{
        const li=document.createElement('li')
        const a=document.createElement('a')
        a.innerHTML=item.text
        a.className=currentPage===item.page?'active':''
        if(item.page==='login'&&isLoggedIn){
            a.onclick=()=>logout()
        }else{
            a.onclick=()=>navigateTo(item.page)
        }
        li.appendChild(a)
        navLinks.appendChild(li)
    })
}

function renderHomePage(){
    featureCard1.appendChild(featureTitle1)
    featureCard1.appendChild(featureDesc1)
    featureCard2.appendChild(featureTitle2)
    featureCard2.appendChild(featureDesc2)
    featureCard3.appendChild(featureTitle3)
    featureCard3.appendChild(featureDesc3)
    featureCard4.appendChild(featureTitle4)
    featureCard4.appendChild(featureDesc4)
    featureCard5.appendChild(featureTitle5)
    featureCard5.appendChild(featureDesc5)
    featureCard6.appendChild(featureTitle6)
    featureCard6.appendChild(featureDesc6)
    
    features.appendChild(featureCard1)
    features.appendChild(featureCard2)
    features.appendChild(featureCard3)
    features.appendChild(featureCard4)
    features.appendChild(featureCard5)
    features.appendChild(featureCard6)
    
    hero.appendChild(heroTitle)
    hero.appendChild(heroSubtitle)
    hero.appendChild(heroBtn)
    
    heroBtn.onclick=()=>navigateTo('booking')
    
    pageContent.appendChild(hero)
    pageContent.appendChild(features)
}

function renderAboutPage(){
    aboutContent.appendChild(aboutTitle)
    aboutContent.appendChild(aboutPara1)
    aboutContent.appendChild(aboutPara2)
    aboutContent.appendChild(aboutPara3)
    aboutContent.appendChild(aboutPara4)
    aboutContent.appendChild(aboutPara5)
    
    pageContent.appendChild(aboutContent)
}

function renderContactPage(){
    contactCard1.appendChild(contactCardTitle1)
    contactCard1.appendChild(contactCardContent1)
    contactCard2.appendChild(contactCardTitle2)
    contactCard2.appendChild(contactCardContent2)
    contactCard3.appendChild(contactCardTitle3)
    contactCard3.appendChild(contactCardContent3)
    contactCard4.appendChild(contactCardTitle4)
    contactCard4.appendChild(contactCardContent4)
    
    contactInfo.appendChild(contactCard1)
    contactInfo.appendChild(contactCard2)
    contactInfo.appendChild(contactCard3)
    contactInfo.appendChild(contactCard4)
    
    select1.appendChild(option1)
    select1.appendChild(option2)
    select1.appendChild(option3)
    select1.appendChild(option4)
    select1.appendChild(option5)
    select1.appendChild(option6)
    select1.appendChild(option7)
    
    formGroup1.appendChild(label1)
    formGroup1.appendChild(input1)
    formGroup2.appendChild(label2)
    formGroup2.appendChild(input2)
    formGroup3.appendChild(label3)
    formGroup3.appendChild(input3)
    formGroup4.appendChild(label4)
    formGroup4.appendChild(select1)
    formGroup5.appendChild(label5)
    formGroup5.appendChild(textarea1)
    
    contactForm.appendChild(formGroup1)
    contactForm.appendChild(formGroup2)
    contactForm.appendChild(formGroup3)
    contactForm.appendChild(formGroup4)
    contactForm.appendChild(formGroup5)
    contactForm.appendChild(submitBtn)
    
    formContainer.appendChild(formTitle)
    formContainer.appendChild(contactForm)
    
    pageContent.appendChild(contactTitle)
    pageContent.appendChild(contactInfo)
    pageContent.appendChild(formContainer)
    
    contactForm.onsubmit=(e)=>{
        e.preventDefault()
        const name=document.getElementById('contactName').value
        const email=document.getElementById('contactEmail').value
        const subject=document.getElementById('contactSubject').value
        const message=document.getElementById('contactMessage').value
        
        if(name&&email&&subject&&message){
            alert(`Thank you ${name}! Your message has been sent successfully. We'll get back to you within 24 hours.`)
            contactForm.reset()
        }
    }
}

function renderBookingPage(){
    if(!isLoggedIn){
        authBtn.onclick=()=>navigateTo('login')
        authMessage.appendChild(authTitle)
        authMessage.appendChild(authText)
        authMessage.appendChild(authBtn)
        pageContent.appendChild(authMessage)
        return
    }
    
    const today=new Date().toISOString().split('T')[0]
    bookingInput1.min=today
    
    bookingSelect1.appendChild(bookingOption1)
    bookingSelect1.appendChild(bookingOption2)
    bookingSelect1.appendChild(bookingOption3)
    bookingSelect1.appendChild(bookingOption4)
    
    bookingSelect2.appendChild(teamOption1)
    bookingSelect2.appendChild(teamOption2)
    bookingSelect2.appendChild(teamOption3)
    bookingSelect2.appendChild(teamOption4)
    
    slotsGroup.appendChild(slotsLabel)
    slotsGroup.appendChild(slotsInfo)
    slotsGroup.appendChild(slotsGrid)
    
    bookingGroup1.appendChild(bookingLabel1)
    bookingGroup1.appendChild(bookingInput1)
    bookingGroup2.appendChild(bookingLabel2)
    bookingGroup2.appendChild(bookingSelect1)
    bookingGroup3.appendChild(bookingLabel3)
    bookingGroup3.appendChild(bookingInput3)
    bookingGroup4.appendChild(bookingLabel4)
    bookingGroup4.appendChild(bookingInput4)
    bookingGroup5.appendChild(bookingLabel5)
    bookingGroup5.appendChild(bookingSelect2)
    
    bookingForm.appendChild(bookingGroup1)
    bookingForm.appendChild(bookingGroup2)
    bookingForm.appendChild(slotsGroup)
    bookingForm.appendChild(bookingGroup3)
    bookingForm.appendChild(bookingGroup4)
    bookingForm.appendChild(bookingGroup5)
    bookingForm.appendChild(bookingBtn)
    
    bookingContainer.appendChild(bookingTitle)
    bookingContainer.appendChild(bookingForm)
    bookingContainer.appendChild(bookingSummary)
    
    pageContent.appendChild(bookingContainer)
    
    renderSlots()
    updateBookingDisplay()
    
    bookingForm.onsubmit=(e)=>{
        e.preventDefault()
        submitBooking()
    }
}

function renderLoginPage(){
    if(isLoggedIn){
        const loggedInMessage=document.createElement('div')
        loggedInMessage.className='auth-message'
        const loggedInTitle=document.createElement('h2')
        loggedInTitle.innerHTML=`Welcome back, ${currentUser}! 👋`
        const loggedInText=document.createElement('p')
        loggedInText.innerHTML='You are successfully logged in and can access all booking features.'
        const loggedInButtons=document.createElement('div')
        loggedInButtons.style.marginTop='2rem'
        const goToBookingBtn=document.createElement('button')
        goToBookingBtn.className='btn'
        goToBookingBtn.innerHTML='Go to Booking'
        goToBookingBtn.style.marginRight='1rem'
        goToBookingBtn.onclick=()=>navigateTo('booking')
        const logoutBtn=document.createElement('button')
        logoutBtn.className='btn'
        logoutBtn.innerHTML='Logout'
        logoutBtn.onclick=()=>logout()
        
        loggedInButtons.appendChild(goToBookingBtn)
        loggedInButtons.appendChild(logoutBtn)
        loggedInMessage.appendChild(loggedInTitle)
        loggedInMessage.appendChild(loggedInText)
        loggedInMessage.appendChild(loggedInButtons)
        
        pageContent.appendChild(loggedInMessage)
        return
    }
    
    loginGroup1.appendChild(loginLabel1)
    loginGroup1.appendChild(loginInput1)
    loginGroup2.appendChild(loginLabel2)
    loginGroup2.appendChild(loginInput2)
    
    loginForm.appendChild(loginGroup1)
    loginForm.appendChild(loginGroup2)
    loginForm.appendChild(loginBtn)
    
    // demoInfo.appendChild(demoText1)
    // demoInfo.appendChild(demoText2)
    
    loginFormContainer.appendChild(loginTitle)
    loginFormContainer.appendChild(loginForm)
   // loginFormContainer.appendChild(demoInfo)
    
    loginContainer.appendChild(loginFormContainer)
    pageContent.appendChild(loginContainer)
    
    loginForm.onsubmit=(e)=>{
        e.preventDefault()
        const email=document.getElementById('loginEmail').value
        const password=document.getElementById('loginPassword').value
        
        if(email&&password){
            isLoggedIn=true
            currentUser=email.split('@')[0]
            alert(`Welcome ${currentUser}! Login successful.`)
            navigateTo('booking')
        }
    }
}

// Initial Setup and Assembly
logo.onclick=()=>navigateTo('home')
navContent.appendChild(logo)
navContent.appendChild(navLinks)
navbar.appendChild(navContent)
container.appendChild(navbar)
container.appendChild(pageContent)
document.getElementById('app').appendChild(container)

// Initialize Application
renderPage()
