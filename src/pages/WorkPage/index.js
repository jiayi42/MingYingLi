
import React, { Component } from 'react';
import styles from './works.module.scss';
import WorkLists from '../../components/WorkLists';
import datas from '../works.json';

export default () =>{
    return <div className={ styles.wrap }>
        <div className={ styles.title }>
            <h3>My Projects</h3>
            <p>Here are my group or individual projects.</p>
        </div>
        <WorkLists dataSource={ datas.data } />
    </div>
}
