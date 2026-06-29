"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionReveal from "./SectionReveal";
import Eyebrow from "./Eyebrow";
import SplitText from "./SplitText";
import { sortedPosts } from "../lib/blog";

const POSTS = sortedPosts()
  .slice(0, 4)
  .map((p, i) => ({
    id: p.slug,
    tag: p.tag,
    tagColor: p.tagColor,
    date: new Date(p.date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
    readTime: `${p.readMins} min read`,
    title: p.title,
    excerpt: p.excerpt,
    link: `/blog/${p.slug}`,
    featured: i === 0,
  }));

function FeaturedPost({ post }: { post: (typeof POSTS)[0] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.a
      ref={ref}
      href={post.link}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{
        y: -6,
        boxShadow:
          "0 40px 80px rgba(0,0,0,0.6), 0 0 50px rgba(255,46,151,0.12)",
        borderColor: "rgba(255,46,151,0.5)",
      }}
      style={{
        display: "block",
        textDecoration: "none",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg,rgba(255,46,151,0.08) 0%,rgba(13,13,24,0.95) 50%,rgba(168,85,247,0.06) 100%)",
        border: "1px solid rgba(255,46,151,0.2)",
        padding: "44px 40px",
        cursor: "none",
        gridColumn: "span 2",
      }}
      className="featured-post"
    >
      {/* animated gradient orb */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: -80,
          right: -80,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,46,151,0.4), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 20,
          }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 9,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#0A0A12",
              background: "#FF2E97",
              padding: "3px 10px",
              fontWeight: 700,
            }}
          >
            FEATURED
          </span>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#FF2E97",
              border: "1px solid rgba(255,46,151,0.4)",
              padding: "3px 10px",
            }}
          >
            {post.tag}
          </span>
        </div>

        <h2
          style={{
            fontFamily: "'Chakra Petch', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.5rem,3vw,2.2rem)",
            lineHeight: 1.15,
            marginBottom: 16,
            color: "#E5E7EB",
            maxWidth: "50ch",
          }}
        >
          {post.title}
        </h2>
        <p
          style={{
            color: "#9aa0b3",
            fontSize: "1.06rem",
            lineHeight: 1.65,
            maxWidth: "55ch",
            marginBottom: 28,
          }}
        >
          {post.excerpt}
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            color: "#7a7f93",
            letterSpacing: "0.08em",
          }}
        >
          <span>{post.date}</span>
          <span style={{ color: "#FF2E97" }}>·</span>
          <span>{post.readTime}</span>
          <span
            style={{
              marginLeft: "auto",
              color: "#FF2E97",
              fontSize: 13,
              fontWeight: 700,
            }}
          >
            Read →
          </span>
        </div>
      </div>
    </motion.a>
  );
}

function PostCard({
  post,
  delay,
}: {
  post: (typeof POSTS)[0];
  delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.a
      ref={ref}
      href={post.link}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{
        y: -5,
        borderColor: `${post.tagColor}55`,
        boxShadow: `0 20px 50px rgba(0,0,0,0.5), 0 0 30px ${post.tagColor}18`,
      }}
      style={{
        display: "block",
        textDecoration: "none",
        padding: "28px 26px",
        background: "linear-gradient(180deg,rgba(255,255,255,0.025),rgba(255,255,255,0.005))",
        border: "1px solid rgba(0,240,255,0.1)",
        position: "relative",
        overflow: "hidden",
        cursor: "none",
        transition: "border-color 0.3s",
      }}
    >
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ delay: delay + 0.2, duration: 0.6 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: `linear-gradient(90deg, ${post.tagColor}, transparent)`,
          transformOrigin: "left",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 9,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: post.tagColor,
            border: `1px solid ${post.tagColor}44`,
            background: `${post.tagColor}12`,
            padding: "3px 10px",
          }}
        >
          {post.tag}
        </span>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            color: "#7a7f93",
            letterSpacing: "0.06em",
          }}
        >
          {post.readTime}
        </span>
      </div>

      <h3
        style={{
          fontFamily: "'Chakra Petch', sans-serif",
          fontWeight: 700,
          fontSize: "1.18rem",
          lineHeight: 1.25,
          marginBottom: 10,
          color: "#E5E7EB",
        }}
      >
        {post.title}
      </h3>
      <p
        style={{
          color: "#7a7f93",
          fontSize: "0.92rem",
          lineHeight: 1.6,
          marginBottom: 20,
        }}
      >
        {post.excerpt}
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10,
          color: "#7a7f93",
          letterSpacing: "0.06em",
        }}
      >
        <span>{post.date}</span>
        <span style={{ color: post.tagColor, fontWeight: 700 }}>Read →</span>
      </div>
    </motion.a>
  );
}

export default function BlogSection() {
  const featured = POSTS.filter((p) => p.featured);
  const rest = POSTS.filter((p) => !p.featured);

  return (
    <section
      id="blog"
      style={{ position: "relative", padding: "120px 0", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "-10%",
          width: 500,
          height: 500,
          background:
            "radial-gradient(ellipse, rgba(0,240,255,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          width: "min(1180px,92vw)",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <SectionReveal style={{ marginBottom: 60 }}>
          <Eyebrow>Thoughts & writing</Eyebrow>
          <SplitText
            text="Notes from the edge of AI adoption."
            style={{
              fontFamily: "'Chakra Petch', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem,5vw,3.4rem)",
              letterSpacing: "-0.01em",
              lineHeight: 1.02,
              margin: ".5rem 0 1rem",
            }}
            accentWords={["edge", "adoption."]}
            accentColor="#00F0FF"
            delay={0.1}
          />
          <p
            style={{
              fontSize: "clamp(1rem,1.5vw,1.18rem)",
              color: "#aeb3c4",
              maxWidth: "60ch",
            }}
          >
            Practical take on AI — no hype, no doomism. Just patterns from the
            field, frameworks that work, and things I noticed that you
            probably haven&apos;t read elsewhere.
          </p>
        </SectionReveal>

        <div
          className="blog-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 20,
            alignItems: "start",
          }}
        >
          {featured.map((p) => (
            <FeaturedPost key={p.id} post={p} />
          ))}
          {rest.map((p, i) => (
            <PostCard key={p.id} post={p} delay={i * 0.1 + 0.1} />
          ))}
        </div>

        <SectionReveal delay={0.2} style={{ marginTop: 40, textAlign: "center" as const }}>
          <motion.a
            href="/blog"
            whileHover={{ y: -2, boxShadow: "inset 0 0 0 1px #00F0FF, 0 0 22px rgba(0,240,255,0.3)" }}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "14px 28px",
              color: "#00F0FF",
              background: "transparent",
              boxShadow: "inset 0 0 0 1px rgba(0,240,255,0.4)",
              clipPath:
                "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
              cursor: "none",
            }}
          >
            &gt; all posts
          </motion.a>
        </SectionReveal>
      </div>

      <style>{`
        @media(max-width:900px){
          .blog-grid{grid-template-columns:1fr!important}
          .featured-post{grid-column:span 1!important}
        }
      `}</style>
    </section>
  );
}
