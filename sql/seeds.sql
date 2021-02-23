DROP TABLE users CASCADE ;
DROP TABLE documentations CASCADE ;
DROP TABLE favorite_nannies CASCADE ;
DROP TABLE wallet_transactions CASCADE ;
DROP TABLE wallets CASCADE ;
DROP TABLE cancel_jobs CASCADE ;
DROP TABLE checkpoint_jobs CASCADE ;
DROP TABLE user_payment_methods CASCADE ;
DROP TABLE user_interesteds CASCADE ;
DROP TABLE user_vacinations CASCADE ;
DROP TABLE user_documentations CASCADE ;
DROP TABLE user_disponibilities CASCADE ; 
DROP TABLE cancel_justify CASCADE ;
DROP TABLE status_jobs CASCADE ;
DROP TABLE payment_methods CASCADE ;
DROP TABLE stages CASCADE ;
DROP TABLE tags CASCADE ;
DROP TABLE vacinations CASCADE ;
DROP TABLE genders CASCADE ; 
DROP TABLE jobs CASCADE ;
DROP TABLE jobs_stages CASCADE ;

create table genders(
	id serial primary key, 
	name	Varchar(120),
	active	bool default true,
	created_at	timestamp default current_timestamp,
	updated_at	timestamp,
	imported_at	timestamp
);

create table documentations(
	id serial primary key, 
	name	Varchar(120),
	active	bool default true,
	created_at	timestamp default current_timestamp,
	updated_at	timestamp,
	imported_at	timestamp
);

create table vacinations(
	id serial primary key, 
	name	Varchar(120),
	active	bool default true,
	created_at	timestamp default current_timestamp,
	updated_at	timestamp,
	imported_at	timestamp
);

create table tags(
	id serial primary key, 
	name	Varchar(120)	,
	type	Varchar(10)	, 
	active	bool default true,
	created_at	timestamp default current_timestamp,
	updated_at	timestamp,
	imported_at	timestamp
);

create table stages(
	id serial primary key, 
	name	Varchar(120)	, 
	active	bool default true,
	created_at	timestamp default current_timestamp,
	updated_at	timestamp,
	imported_at	timestamp
);



create table payment_methods(
	id serial primary key,  
	name	Varchar(120)	,
	active	bool default true,
	created_at	timestamp default current_timestamp,
	updated_at	timestamp,
	imported_at	timestamp 
);
	


create table status_jobs(
	id serial primary key,  
	name	Varchar(120)	,
	active	bool default true,
	created_at	timestamp default current_timestamp,
	updated_at	timestamp,
	imported_at	timestamp 
);
	
create table cancel_justify(
	id serial primary key,  
	name	Varchar(120)	,
	active	bool default true,
	created_at	timestamp default current_timestamp,
	updated_at	timestamp,
	imported_at	timestamp 
);


create table users(
	id serial primary key, 
	registered_number	Varchar(20)	,
	username	Varchar(120)	,
	password	Varchar(120)	,
	first_name	Varchar(120)	,
	last_name	Varchar(120)	,
	phone	Varchar(20)	,
	date_of_birth	timestamp	,
	age	integer	,
	gender_id	integer	,
	adress	Varchar(120)	,
	city	Varchar(120)	,
	state	Varchar(20)	,
	cell_phone	Varchar(20)	,
	email	Varchar(120)	,
	type	Varchar(120)	,
	photo	text	,
	your_description	text	,
	biography_description	text	,
	active	bool default true,
	created_at	timestamp default current_timestamp,
	updated_at	timestamp,
	imported_at	timestamp,
	
 	FOREIGN KEY (gender_id) REFERENCES genders (id)
);


create table user_disponibilities(
	id serial primary key, 
	user_id	integer,
	initial_week_day	integer,
	final_week_day	integer,
	initial_hour	time,
	final_hour	time,
	active	bool default true,
	created_at	timestamp default current_timestamp,
	updated_at	timestamp,
	imported_at	timestamp,
	
 	FOREIGN KEY (user_id) REFERENCES users (id)
);
	

create table user_documentations(
	id serial primary key, 
	user_id integer, 
	documentation_id integer,
	active	bool default true,
	created_at	timestamp default current_timestamp,
	updated_at	timestamp,
	imported_at	timestamp,
	
 	FOREIGN KEY (user_id) REFERENCES users (id)
);
	
create table user_vacinations(
	id serial primary key, 
	user_id	integer,
    vacination_id integer,
	active	bool default true,
	created_at	timestamp default current_timestamp,
	updated_at	timestamp,
	imported_at	timestamp,
	
 	FOREIGN KEY (user_id) REFERENCES users (id),
 	FOREIGN KEY (vacination_id) REFERENCES vacinations (id)
);
	

create table user_interesteds(
	id serial primary key, 
	user_id	integer, 
	interested_description	Varchar(120),
	active	bool default true,
	created_at	timestamp default current_timestamp,
	updated_at	timestamp,
	imported_at	timestamp,
	
 	FOREIGN KEY (user_id) REFERENCES users (id)
);

create table user_payment_methods(
	id serial primary key, 
	payment_method_id	integer	,
	user_id	integer	,
	type	Varchar(50)	,
	agency	Varchar(120)	,
	account	Varchar(120)	,
	favorite	bool	,
	active	bool default true,
	created_at	timestamp default current_timestamp,
	updated_at	timestamp,
	imported_at	timestamp,
	
	FOREIGN KEY (payment_method_id) REFERENCES payment_methods (id),
	FOREIGN KEY (user_id) REFERENCES users (id)
);
	
 
create table jobs(
	id serial primary key,  
	nanny_id	integer	,
	parent_id	integer	,
	adress	Varchar(500)	, 
	value	double precision	,
	description	Varchar(500)	,
	initial_date	timestamp	,
	final_date	timestamp	,
	initial_hour	time	,
	final_hour	time	,
	status_id	integer	,
	transaction_id	integer	,
	min_pay_value	double precision	,
	max_pay_value	double precision	,
	active	bool default true,
	created_at	timestamp default current_timestamp,
	updated_at	timestamp,
	imported_at	timestamp
	
 	FOREIGN KEY (nanny_id) REFERENCES users (id),
 	FOREIGN KEY (parent_id) REFERENCES users (id) 
);


create table jobs_tags(
	id serial primary key, 
	user_id	integer	,
	job_id	integer	,
	tag_id	integer	,
	active	bool default true,
	created_at	timestamp default current_timestamp,
	updated_at	timestamp,
	imported_at	timestamp,
	
 	FOREIGN KEY (job_id) REFERENCES jobs (id),
 	FOREIGN KEY (tag_id) REFERENCES tags (id)
);

create table jobs_stages(
	id serial primary key, 
	job_id	integer	,
	stage_id	integer	,
	active	bool default true,
	created_at	timestamp default current_timestamp,
	updated_at	timestamp,
	imported_at	timestamp,
	
 	FOREIGN KEY (job_id) REFERENCES jobs (id),
 	FOREIGN KEY (tag_id) REFERENCES tags (id)
);
 
create table checkpoint_jobs(
	id serial primary key, 
	job_id	integer	,
	description	Varchar(50)	,
	date timestamp	,
	hour time	,
	active	bool default true,
	created_at	timestamp default current_timestamp,
	updated_at	timestamp,
	imported_at	timestamp,

 	FOREIGN KEY (job_id) REFERENCES jobs (id)
);

  
create table cancel_jobs(
	id serial primary key, 
	job_id	integer	,
	cancel_id integer	,
	comments text	,
	active	bool default true,
	created_at	timestamp default current_timestamp,
	updated_at	timestamp,
	imported_at	timestamp ,
	
 	FOREIGN KEY (job_id) REFERENCES jobs (id),
 	FOREIGN KEY (cancel_id) REFERENCES cancel_justify (id)
);


create table wallets(
	id serial primary key, 
	user_id	integer,
	current_value double precision,
	active	bool default true,
	created_at	timestamp default current_timestamp,
	updated_at	timestamp,
	imported_at	timestamp ,
	
 	FOREIGN KEY (user_id) REFERENCES users (id) 
);


create table wallet_transactions(
	id serial primary key,  
	user_payment_method_from_id	integer	,
	user_payment_method_to_id	integer	,
	value	double precision	,
	active	bool default true,
	created_at	timestamp default current_timestamp,
	updated_at	timestamp,
	imported_at	timestamp ,
	 
 	FOREIGN KEY (user_payment_method_from_id) REFERENCES user_payment_methods (id),
 	FOREIGN KEY (user_payment_method_to_id) REFERENCES user_payment_methods (id) 
);

 

create table favorite_nannies(
	id serial primary key,  
	parent_id integer,
	nanny_id integer,
	value	double precision	,
	active	bool default true,
	created_at	timestamp default current_timestamp,
	updated_at	timestamp,
	imported_at	timestamp ,
	 
 	FOREIGN KEY (parent_id) REFERENCES users (id),
 	FOREIGN KEY (nanny_id) REFERENCES users (id) 
);
