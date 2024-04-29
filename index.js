const banner_p_tag = document.getElementById('banner-p-tag')
banner_p_tag.textContent = 'we are creatives';

const transform = document.getElementById('transform')
transform.textContent = "Transform your  brand";

const transform_p = document.getElementById('transform-p')
transform_p.textContent = 'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.';

const standout = document.getElementById('standout')
standout.textContent = 'Stand out to the right audience'

const standout_p = document.getElementById('standout-p')
standout_p.textContent = 'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. '

const image_1_h1 = document.getElementById('image-1-h1')
image_1_h1.textContent = 'Graphic design'

const image_1_p = document.getElementById('image-1-p')
image_1_p.textContent = 'Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.'

const image_2_h1 = document.getElementById('image-2-h1')
image_2_h1.textContent = 'Photography'

const image_2_p = document.getElementById('image-2-p')
image_2_p.textContent = 'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'

const cards = document.getElementById('cards')

const client_data = [
    {
        name:'Emily R.',
        test:'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
        role:'Marketing Director',
        img_src:'/images/image-emily.jpg'
    },
    {
        name:'Thomas S.',
        test:'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
        role:"Chief Operating Officer",
        img_src:'/images/image-thomas.jpg'
    },
    {
        name:"Jennie F.",
        test:"Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
        role:"Business Owner",
        img_src:'/images/image-jennie.jpg'
    }
]

for(let i = 0 ; i < client_data.length ; i++){

    const client_info = client_data[i]
    //console.log(project.name)
    const client_Item = document.createElement('div');
    client_Item.classList.add('card');

    client_Item.innerHTML = `
    <img src=${client_info.img_src} class="round-image" />
    <p>${client_info.test}</p>
    <h1>${client_info.name}</h1>
    <p>${client_info.role}</p>
`;
cards.appendChild(client_Item);
}

