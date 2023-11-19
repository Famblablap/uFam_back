# Project Support

### UrFam

## Summary

### Team:
Theshia, Carolina and Julio.

### Project Idea:
-  Our project involves developing a private family social media platform, tailored to create a safe and interactive online environment for families. Similar to popular social networks but focused on family connections, users can create personal profiles, share experiences, and maintain a digital diary of family moments. What sets our platform apart is its emphasis on children's digital education and parental involvement. Families can document and share their journey, from daily activities to special events, fostering a strong sense of community. This platform serves as a hub for families to connect, learn, and grow together in the digital age, ensuring a safe space for children to engage with social media under parental guidance. Our goal is to be the foremost family-oriented social media space, where experiences are shared, and lasting bonds are nurtured.

Roles: There will be 3 main roles:

- Admin:
    - Manages the entire platform.
    - Access to all administrative functions, such as content moderation, user account management, data analysis, etc.

- Parents:
    - Supervision and control of their children's accounts.
    - Access to tools for managing the privacy and security of their children's accounts.
    - Ability to view and moderate content shared by their children.

- Kids:
    - Limited access compared to adults.
    - Features focused on safe interaction, learning, and educational entertainment.
    - Ability to share and interact within a controlled environment.

### Tables:

<img width="1931" alt="Tables" src="https://github.com/Famblablap/UrFam_back/assets/141185519/55ce0f63-ba25-4ede-8417-86e0d9db31fc">

### GameLister Features
- Platform catalogue.
- A vast collection of games with detailed information on each title.
- User profile.
- OWNED: History of owned games or willing to buy.
- STATUS: The ability to create profiles to track games they've played, are playing, or want to play in the future.
- Ability to provide ratings and write reviews to share opinions.
- Offer a news section that delivers updates about the gaming industry.
- Filters by game, genre, year, etc.
- Website
- DataBase
- Gamification: gamification elements like badges, achievements, and rewards for users who actively engage with the platform, such as writing insightful reviews or contributing valuable content.
- Games recommendations by AI based on your profile.

### Relationships between tables:

#### One to one:
- Ref: users.user_id - contactInfo.user_id
#### One to many:
- Ref: catalogue.catalogue_id < comments.catalogue_id
- Ref: collection.catalogue_id < catalogue.catalogue_id
- Ref: users.user_id < comments.user_id

#### Many to many:
- Ref: platform.platform_id <> platform_catalogue.platform_id
- Ref: catalogue.catalogue_id <> platform_catalogue.catalogue_id
- Ref: users.user_id <> user_catalogue.user_id
- Ref: catalogue.catalogue_id <> user_catalogue.catalogue_id

### Authentication Endpoints
The Authentication flow for the application is:
![image](https://github.com/VeronicaRamirezMoreno/Project-2-API-Rest/assets/122170615/c4cb04e0-a87f-4aaf-b399-c74427c46ed8)


## Endpoints

###  Signup/Login

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------|-------------------------------------------------|--------------------
POST   | /auth/signup     | -     | user/admin | User Signup              | `name`, `email`, `dob`, `password` | { user_id, name, email }
POST   | /auth/login      | YES     | user/admin | User Login               | `email`, `password`                             | { token: `token` }


### User Endpoints

METHOD | ENDPOINT            | TOKEN | ROLE     | DESCRIPTION             | POST PARAMS                                               | RETURNS
-------|---------------------|-------|----------|-------------------------|-----------------------------------------------------------|--------------------
GET    | /api/users          | YES   | admin    | Get all users           | -                                                         | [{ users }]
GET    | /api/users/:id      | YES   | user/admin | Get user by id          | -                                                         | { user }
PUT    | /api/users/:id      | YES   | user     | Edit user profile       | `name`, `email`, `dob`, `password`, `profile_picture`      | { message: 'User updated' }
DELETE | /api/users/:id      | YES   | user     | Delete user account     | -                                                         | { message: 'User deleted' }

### Parent Endpoints

METHOD | ENDPOINT                 | TOKEN | ROLE     | DESCRIPTION                | POST PARAMS                                               | RETURNS
-------|--------------------------|-------|----------|----------------------------|-----------------------------------------------------------|--------------------
POST   | /api/parents/kids        | YES   | parent   | Create kid account         | `name`, `dob`, `profile_picture`                           | { kid_user_id, name }
GET    | /api/parents/kids        | YES   | parent   | Get all kids               | -                                                         | [{ kids }]
PUT    | /api/parents/kids/:kidId | YES   | parent   | Update kid's account       | `name`, `dob`, `profile_picture`                           | { message: 'Kid updated' }
DELETE | /api/parents/kids/:kidId | YES   | parent   | Delete kid's account       | -                                                         | { message: 'Kid deleted' }

### Kids Endpoints

METHOD | ENDPOINT               | TOKEN | ROLE      | DESCRIPTION               | POST PARAMS                          | RETURNS
-------|------------------------|-------|-----------|---------------------------|--------------------------------------|--------------------
POST   | /api/kids/photos       | YES   | kid       | Upload photo by kid       | `image_url`                          | { photo }
POST   | /api/kids/videos       | YES   | kid       | Upload video by kid       | `video_url`                          | { video }
GET    | /api/kids/messages     | YES   | kid       | Get messages for a kid    | -                                    | [{ messages }]
POST   | /api/kids/messages     | YES   | kid       | Send a message by a kid   | `receiver_id`, `message`             | { message }

### Comments Endpoints

METHOD | ENDPOINT               | TOKEN | ROLE     | DESCRIPTION               | POST PARAMS                         | RETURNS
-------|------------------------|-------|----------|---------------------------|-------------------------------------|--------------------
GET    | /api/comments          | YES   | user/admin | Get all comments           | -                                    | [{ comments }]
GET    | /api/comments/:id      | YES   | user/admin | Get comment by id          | -                                    | { comment }
POST   | /api/comments          | YES   | user     | Post a comment            | `comment_text`, `user_id`, `photo_id`, `video_id` | { comment }
PUT    | /api/comments/:id      | YES   | user     | Edit comment              | `comment_text`                       | { message: 'Comment updated' }
DELETE | /api/comments/:id      | YES   | user     | Delete comment            | -                                    | { message: 'Comment deleted' }

### Photos Endpoints

METHOD | ENDPOINT               | TOKEN | ROLE     | DESCRIPTION                | POST PARAMS                          | RETURNS
-------|------------------------|-------|----------|----------------------------|--------------------------------------|--------------------
GET    | /api/photos            | YES   | user/admin | Get all photos              | -                                    | [{ photos }]
GET    | /api/photos/:id        | YES   | user/admin | Get photo by id             | -                                    | { photo }
POST   | /api/photos            | YES   | user     | Upload a new photo         | `image_url`, `user_id`               | { photo }
PUT    | /api/photos/:id        | YES   | user     | Update a photo             | `image_url`                          | { message: 'Photo updated' }
DELETE | /api/photos/:id        | YES   | user     | Delete a photo             | -                                    | { message: 'Photo deleted' }

### Videos Endpoints

METHOD | ENDPOINT               | TOKEN | ROLE     | DESCRIPTION                | POST PARAMS                          | RETURNS
-------|------------------------|-------|----------|----------------------------|--------------------------------------|--------------------
GET    | /api/videos            | YES   | user/admin | Get all videos              | -                                    | [{ videos }]
GET    | /api/videos/:id        | YES   | user/admin | Get video by id             | -                                    | { video }
POST   | /api/videos            | YES   | user     | Upload a new video         | `video_url`, `user_id`               | { video }
PUT    | /api/videos/:id        | YES   | user     | Update a video             | `video_url`                          | { message: 'Video updated' }
DELETE | /api/videos/:id        | YES   | user     | Delete a video             | -                                    | { message: 'Video deleted' }

### Likes Endpoints

METHOD | ENDPOINT               | TOKEN | ROLE     | DESCRIPTION                | POST PARAMS                          | RETURNS
-------|------------------------|-------|----------|----------------------------|--------------------------------------|--------------------
GET    | /api/likes             | YES   | user/admin | Get all likes               | -                                    | [{ likes }]
POST   | /api/likes             | YES   | user     | Like a photo/video         | `user_id`, `photo_id`, `video_id`    | { like }
PUT    | /api/likes/:id         | YES   | user     | Update a like              | `photo_id`, `video_id`               | { message: 'Like updated' }
DELETE | /api/likes/:id         | YES   | user     | Remove a like              | -                                    | { message: 'Like removed' }

### Messages Endpoints

METHOD | ENDPOINT               | TOKEN | ROLE     | DESCRIPTION                | POST PARAMS                          | RETURNS
-------|------------------------|-------|----------|----------------------------|--------------------------------------|--------------------
GET    | /api/messages          | YES   | user/admin | Get all messages            | -                                    | [{ messages }]
GET    | /api/messages/:id      | YES   | user/admin | Get message by id           | -                                    | { message }
POST   | /api/messages          | YES   | user     | Send a new message         | `sender_id`, `receiver_id`, `message` | { message }
PUT    | /api/messages/:id      | YES   | user     | Update a message           | `message`                            | { message: 'Message updated' }
DELETE | /api/messages/:id      | YES   | user     | Delete a message           | -                                    | { message: 'Message deleted' }

### Notifications Endpoints

METHOD | ENDPOINT                | TOKEN | ROLE     | DESCRIPTION                 | POST PARAMS                                       | RETURNS
-------|-------------------------|-------|----------|-----------------------------|---------------------------------------------------|--------------------
GET    | /api/notifications      | YES   | user     | Get all notifications       | -                                                 | [{ notifications }]
GET    | /api/notifications/:id  | YES   | user     | Get notification by id      | -                                                 | { notification }
POST   | /api/notifications      | YES   | admin    | Create a new notification   | `user_id`, `type`, `content`, `is_read`, `date_time` | { notification }
PUT    | /api/notifications/:id  | YES   | user     | Update a notification       | `type`, `content`, `is_read`, `date_time`           | { message: 'Notification updated' }
DELETE | /api/notifications/:id  | YES   | user     | Delete a notification       | -                                                 | { message: 'Notification deleted' }
