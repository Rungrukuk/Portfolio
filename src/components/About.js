import React from 'react';

const About = React.forwardRef((props, ref) => (
    <div className="section about-me" ref={ref}>
        <h2>About me</h2>
        <p>Kamal Azizov</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget sapien eu leo sollicitudin rhoncus id eu magna. Aliquam hendrerit, nisi in tristique tempor, justo dui suscipit ipsum, ut pharetra tortor justo at dolor. Vestibulum pellentesque mi at purus varius sollicitudin. Maecenas elementum lacus sed hendrerit ultricies. Aliquam ligula nisl, tempor vitae consequat nec, suscipit sit amet justo. Cras non scelerisque lectus. Nulla pulvinar tristique risus, in sagittis odio pellentesque ac. Cras et euismod massa. Aenean vel sodales diam, in tempor enim. Pellentesque sit amet blandit mauris, quis consectetur odio. Ut sollicitudin purus erat, ut venenatis ipsum vulputate blandit. Praesent vulputate felis felis, sed porttitor massa tempor vitae. Mauris aliquam pharetra auctor. Vestibulum tellus eros, accumsan eu cursus eget, porta ut felis. Vivamus rhoncus sed lacus vitae pharetra.

        </p>
        <p>Bachelor's in Information Technologies @ Baku Engineering University</p>
    </div>
));

export default About;
