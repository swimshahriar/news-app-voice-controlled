import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';

import NewsCard from '../NewsCard/NewsCard';
import useStyles from './styles';
import { cardInfo } from './cardInfo';

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {cardInfo.map((cardInfo) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className={classes.cardInfo}
              >
                <div
                  className={classes.card}
                  style={{ backgroundColor: cardInfo.color }}
                >
                  <Typography variant="h5">{cardInfo.title}</Typography>
                  {cardInfo.info && (
                    <Typography variant="h6">
                      <strong>
                        {cardInfo.title.split(' ')[2]}: <br /> {cardInfo.info}
                      </strong>
                    </Typography>
                  )}
                  <Typography variant="h6">
                    Try saying: <br /> <i>{cardInfo.text}</i>
                  </Typography>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Grow>
    );
  }
  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {articles.map((article, i) => (
          <Grid
            key={i}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            style={{ display: 'flex' }}
          >
            <NewsCard article={article} activeArticle={activeArticle} i={i} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
