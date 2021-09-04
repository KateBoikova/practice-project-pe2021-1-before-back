import React from 'react';
import { Link } from 'react-router-dom';
import articles from './articles.json';
import styles from './AgencyLevelExperience.module.sass';

const stylesMap = [
  { color: 'rgb(222,68,55)', backgroundColor: 'rgba(222,68,55,.1)' },
  { color: 'rgb(0,201,167)', backgroundColor: 'rgba(0,201,167,.1)' },
  { color: 'rgb(55,125,255)', backgroundColor: 'rgba(55,125,255,.1)' },
];

function AgencyLevelExperience () {
  const mapArticles = (artcile, i) => (
    <artcile className={styles.artcile} key={i}>
      <div style={stylesMap[i]} className={styles.iconContainer}>
        <i className={artcile.iconsClass} />
      </div>
      <h3>{artcile.header}</h3>
      <p>
        {artcile.body}
        <Link to={artcile.link}>Learn More</Link>
      </p>
    </artcile>
  );
  return (
    <section className={styles.agencySection}>
      <h2>Agency Level Experience</h2>
      <div className={styles.flexContainer}>{articles.map(mapArticles)}</div>
    </section>
  );
}

export default AgencyLevelExperience;
