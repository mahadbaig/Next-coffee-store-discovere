import styles from './banner.module.css'

const Banner = (props:any) => {
    return (<div className= {styles.container}>
        <h1 className= {styles.title}>Coffee Discoverer</h1>
        <p className= {styles.subtitle}>Discover your local coffee shops</p>
        <button className= {styles.btn} onClick = {props.handleOnClick}> {props.buttonText} </button>
    </div>)
}

export default Banner;