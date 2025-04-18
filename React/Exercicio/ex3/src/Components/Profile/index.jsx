import Title from '../Title'
import ProfileSection from './ProfileSection'
import styles from './styles.module.css'
import LinkButton from '../LinkButton'
import { useState } from 'react'


export default function Profile(props) {
    const [followText, setFollowText] = useState('Follow')
    return (
        <div className={styles.container}>
            <img className={styles.avatar} src={props.avatar} alt={props.name} />
            <Title>
                <span>{props.name}</span>
                <button className={styles.button}
                
                onClick={() => {
                    
                    alert(`Você agora está seguindo ${props.name}!`)

                    setFollowText('Following')

                }}

                >{followText}</button>
            </Title>


            <ProfileSection>{props.bio}</ProfileSection>
            <ProfileSection>{props.phone}</ProfileSection>
            <ProfileSection>{props.email}</ProfileSection>
            <ProfileSection 
            className={styles.links}
            id='links-section'
            data-test='some value'
            aria-label='social links'
            >

                <LinkButton href={props.githubUrl} >GitHub</LinkButton>
                <LinkButton href={props.linkedInUrl} >LinkedIn</LinkButton>
                <LinkButton href={props.twitterUrl} >Twitter</LinkButton>
            </ProfileSection>


        </div>
    )
}