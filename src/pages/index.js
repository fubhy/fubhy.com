import React from 'react';
import Page from '../components/Page';
import Timeline from '../components/Timeline';
import TimelineItem from '../components/TimelineItem';
import Education from '../components/Education';
import EducationItem from '../components/EducationItem';
import Section from '../components/Section';
import styles from './index.module.css';

const IndexPage = ({ transition }) => (
  <Page title="Home" transition={transition}>
    <Section title="Work experience" id="experience">
      <Timeline>
        <TimelineItem
          company="Self employed"
          location="Planet earth"
          occupation="Senior Software Developer"
          start="December 2017"
          end="Present"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
          lacus risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris bibendum sapien vitae gravida dapibus. Vivamus ornare risus
          libero, dictum feugiat risus ultricies eget. Nullam metus elit,
          feugiat nec ex vel, placerat bibendum sem. Sed rhoncus, enim dignissim
          ultricies porta, leo eros accumsan orci, sed dapibus enim nisl non
          magna. Maecenas hendrerit ex libero, eu mattis magna consectetur eget.
        </TimelineItem>
        <TimelineItem
          company="Amazee Labs"
          location="Zurich, Switzerland"
          occupation="Engineering Lead"
          start="February 2016"
          end="December 2017"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
          lacus risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris bibendum sapien vitae gravida dapibus. Vivamus ornare risus
          libero, dictum feugiat risus ultricies eget. Nullam metus elit,
          feugiat nec ex vel, placerat bibendum sem. Sed rhoncus, enim dignissim
          ultricies porta, leo eros accumsan orci, sed dapibus enim nisl non
          magna. Maecenas hendrerit ex libero, eu mattis magna consectetur eget.
        </TimelineItem>
        <TimelineItem
          company="Zensations"
          location="Vienna, Austria"
          occupation="Chief Technology Officer"
          start="July 2014"
          end="January 2016"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
          lacus risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris bibendum sapien vitae gravida dapibus. Vivamus ornare risus
          libero, dictum feugiat risus ultricies eget. Nullam metus elit,
          feugiat nec ex vel, placerat bibendum sem. Sed rhoncus, enim dignissim
          ultricies porta, leo eros accumsan orci, sed dapibus enim nisl non
          magna. Maecenas hendrerit ex libero, eu mattis magna consectetur eget.
        </TimelineItem>
        <TimelineItem
          company="Zensations"
          location="Vienna, Austria"
          occupation="Senior Software Developer"
          start="January 2013"
          end="July 2014"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
          lacus risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris bibendum sapien vitae gravida dapibus. Vivamus ornare risus
          libero, dictum feugiat risus ultricies eget. Nullam metus elit,
          feugiat nec ex vel, placerat bibendum sem. Sed rhoncus, enim dignissim
          ultricies porta, leo eros accumsan orci, sed dapibus enim nisl non
          magna. Maecenas hendrerit ex libero, eu mattis magna consectetur eget.
        </TimelineItem>
      </Timeline>
    </Section>
    <Section title="Higher Education" id="education">
      <Education>
        <EducationItem
          institution="Medical University of Vienna"
          subject="Human medicine"
          start="2009"
          end="2015"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
          lacus risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris bibendum sapien vitae gravida dapibus. Vivamus ornare risus
          libero, dictum feugiat risus ultricies eget. Nullam metus elit,
          feugiat nec ex vel, placerat bibendum sem. Sed rhoncus, enim dignissim
          ultricies porta, leo eros accumsan orci, sed dapibus enim nisl non
          magna. Maecenas hendrerit ex libero, eu mattis magna consectetur eget.
        </EducationItem>
        <EducationItem
          institution="Open Source Society University"
          subject="Computer science"
          start="2016"
          end="Present"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
          lacus risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris bibendum sapien vitae gravida dapibus. Vivamus ornare risus
          libero, dictum feugiat risus ultricies eget. Nullam metus elit,
          feugiat nec ex vel, placerat bibendum sem. Sed rhoncus, enim dignissim
          ultricies porta, leo eros accumsan orci, sed dapibus enim nisl non
          magna. Maecenas hendrerit ex libero, eu mattis magna consectetur eget.
        </EducationItem>
      </Education>
    </Section>
    <Section title="Professional skills" id="skills">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec lacus
      risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
      bibendum sapien vitae gravida dapibus. Vivamus ornare risus libero, dictum
      feugiat risus ultricies eget. Nullam metus elit, feugiat nec ex vel,
      placerat bibendum sem. Sed rhoncus, enim dignissim ultricies porta, leo
      eros accumsan orci, sed dapibus enim nisl non magna. Maecenas hendrerit ex
      libero, eu mattis magna consectetur eget.
    </Section>
    <Section title="Testimonials" id="testimonials">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec lacus
      risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
      bibendum sapien vitae gravida dapibus. Vivamus ornare risus libero, dictum
      feugiat risus ultricies eget. Nullam metus elit, feugiat nec ex vel,
      placerat bibendum sem. Sed rhoncus, enim dignissim ultricies porta, leo
      eros accumsan orci, sed dapibus enim nisl non magna. Maecenas hendrerit ex
      libero, eu mattis magna consectetur eget.
    </Section>
    <Section title="Public speaking" id="presentations">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec lacus
      risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
      bibendum sapien vitae gravida dapibus. Vivamus ornare risus libero, dictum
      feugiat risus ultricies eget. Nullam metus elit, feugiat nec ex vel,
      placerat bibendum sem. Sed rhoncus, enim dignissim ultricies porta, leo
      eros accumsan orci, sed dapibus enim nisl non magna. Maecenas hendrerit ex
      libero, eu mattis magna consectetur eget.
    </Section>
    <Section title="Get in touch" id="contact">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec lacus
      risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
      bibendum sapien vitae gravida dapibus. Vivamus ornare risus libero, dictum
      feugiat risus ultricies eget. Nullam metus elit, feugiat nec ex vel,
      placerat bibendum sem. Sed rhoncus, enim dignissim ultricies porta, leo
      eros accumsan orci, sed dapibus enim nisl non magna. Maecenas hendrerit ex
      libero, eu mattis magna consectetur eget.
    </Section>
  </Page>
);

export default IndexPage;
