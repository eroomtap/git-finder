import React, { useContext } from 'react';
import UserItem from './Useritem.js';
import Spinner from '../layout/Spinner.js';
import GithubContext from '../../context/github/githubContext.js'

const userStyle = {
	display:'grid',
	gridTemplateColumns:'repeat(3,1fr)',
	gridGap:'1rem'
};

const Users = () => {
	const githubContext = useContext(GithubContext);

	const { loading, users} = githubContext;

	if(loading){
		return (<Spinner />);
	} else {
		return (
			<div style={userStyle}>
				{users.map(user => (
					<UserItem key={user.ud} user={user}/>
				))}
			</div>
		);
	}
}

export default Users;