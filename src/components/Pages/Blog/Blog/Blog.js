import React from 'react';
import BlogBanner from '../BlogBanner/BlogBanner';

const Blog = () => {
    return (
        <div>
            <div>
                <BlogBanner></BlogBanner>
            </div>
            <div className='p-4 md:m-0' style={{ backgroundColor: `#efefed`}}>
            <div className="card w-full md:w-10/12 mx-auto bg-base-100 shadow-xl my-5">
                <div className="card-body">
                    <h2 className="card-title">what are the differences between SQL and NoSQL?</h2>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>SQL</th>
                                    <th>NoSQL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                                    <td>Non-relational or distributed database system.</td>
                                </tr>
                                <tr>
                                    <td>They have fixed or static or predefined schema</td>
                                    <td>They have dynamic schema</td>
                                </tr>
                                <tr>
                                    <td>Not suited for hierarchical data storage.</td>
                                    <td>Best suited for hierarchical data storage.</td>
                                </tr>
                                <tr>
                                    <td>Best suited for complex queries</td>
                                    <td>Not so good for complex queries</td>
                                </tr>
                                <tr>
                                    <td>Vertically Scalable</td>
                                    <td>Horizontally scalable</td>
                                </tr>
                                <tr>
                                    <td>Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc</td>
                                    <td>Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="card w-full md:w-10/12 mx-auto bg-base-100 shadow-xl mb-5">
                <div className="card-body">
                    <h2 className="card-title">What is JWT, and how does it work?</h2>
                    <div>
                        <p>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. <br /> 
                        It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved. <br />
                        JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted. <br /> A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.  <br /> <br />
                        Once decoded, we get two JSON strings: <br />  
                        The header and the payload. <br /> 
                        The signature. <br /> <br />
                        The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.  <br />
                        The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting. <br />
                        There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others. <br />
                        The signature ensures that the token hasn't been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature. 
                        </p>
                    </div>
                </div>
            </div>
            <div className="card w-full md:w-10/12 mx-auto bg-base-100 shadow-xl mb-5">
                <div className="card-body">
                    <h2 className="card-title">What are the differences between javascript and NodeJS?</h2>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Javascript</th>
                                    <th>NodeJS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Javascript is a programming language that is used for writing scripts on the website. </td>
                                    <td>NodeJS is a Javascript runtime environment.</td>
                                </tr>
                                <tr>
                                    <td>Javascript can only be run in the browsers.</td>
                                    <td>We can run Javascript outside the browser with the help of NodeJS.</td>
                                </tr>
                                <tr>
                                    <td>It is basically used on the client-side.</td>
                                    <td>It is mostly used on the server-side.</td>
                                </tr>
                                <tr>
                                    <td>Javascript is capable enough to add HTML and play with the DOM.</td>
                                    <td>Nodejs does not have capability to add HTML tags.</td>
                                </tr>
                                <tr>
                                    <td>Javascript is used in frontend development.</td>
                                    <td>Nodejs is used in server-side development.</td>
                                </tr>
                                <tr>
                                    <td>It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++.</td>
                                    <td>Nodejs is written in C, C++ and Javascript.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="card w-full md:w-10/12 mx-auto bg-base-100 shadow-xl mb-5">
                <div className="card-body">
                    <h2 className="card-title">How does NodeJS handle multiple requests at the same time?</h2>
                    <div>
                        <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. <br />
                        If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Blog;