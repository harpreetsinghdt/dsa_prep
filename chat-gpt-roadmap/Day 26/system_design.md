🧱 1. System Design Building Blocks
| Concept            | Description                                                |
| ------------------ | ---------------------------------------------------------- |
| **Load Balancer**  | Distributes incoming traffic across multiple servers       |
| **Web Servers**    | Serve frontend/backend requests (Nginx, Apache, Node.js)   |
| **App Server**     | Contains your business logic                               |
| **Database**       | Relational (PostgreSQL) or NoSQL (MongoDB, Cassandra)      |
| **Cache**          | Fast temporary data (Redis, Memcached)                     |
| **CDN**            | Content Delivery Network for static assets                 |
| **Message Queue**  | Async tasks (Kafka, RabbitMQ, SQS)                         |
| **Object Storage** | Store images, videos, files (Amazon S3, GCP Cloud Storage) |
| **API Gateway**    | Unified access to your microservices (rate limiting, auth) |


⚙️ 2. Key Concepts to Understand
| Topic                    | Must Understand                                 |
| ------------------------ | ----------------------------------------------- |
| **Scaling**              | Horizontal vs Vertical, stateless servers       |
| **Database Design**      | Sharding, replication, indexing                 |
| **Caching**              | When and what to cache, invalidation strategies |
| **Consistency**          | CAP Theorem, eventual vs strong                 |
| **Latency Optimization** | CDNs, denormalization, async processing         |
| **Rate Limiting**        | How to protect APIs                             |
| **Load Estimation**      | QPS, throughput, latency budgeting              |
