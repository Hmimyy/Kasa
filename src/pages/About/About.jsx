import './About.css';
import Collapse from '../../components/Collapse/Collapse';
import BannerDesktop from '../../assets/banners/bannierDeskAbout.png';
import BannerMobile from '../../assets/banners/bannierMobAbout.png';
import Banner from '../../components/Banner/Banner';


function About () {

    const aboutDatas = [
        {
            "id": "1",
			"title": "Fiabilité",
			"content": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
		},
        {
			"id": "2",
			"title": "Respect",
			"content": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.."
		},
		{
			"id": "3",
			"title": "Service",
			"content": "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.."
		},
		{
			"id": "4",
			"title": "Sécurité",
			"content": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
		}
    ]

    return (
        <div>
           
        <Banner title="bannière" imageDesktop={BannerDesktop} imageMobile={BannerMobile} text =""/>
        <main className='about_main'>
            {aboutDatas.map(data=> {
                return (
                    <div key={data.id}>
                        <Collapse id={data.id} title={data.title} content={data.content} />
                    </div>
                )
            })}
        </main>

        </div>

    )

    
}


export default About;
