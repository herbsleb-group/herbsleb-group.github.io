// Reference management

var references = [{
	'id': 'intGoal',
	'type': 'internal',
	'text': 'Goal',
	'link': '1'
}, {
	'id': 'intTheme',
	'type': 'internal',
	'text': 'Theme',
	'link': '2'
}, {
	'id': 'intCompetition',
	'type': 'internal',
	'text': 'Competition / cooperation',
	'link': '3'
}, {
	'id': 'intStakeholder',
	'type': 'internal',
	'text': 'Stakeholder involvement',
	'link': '4'
}, {
	'id': 'intRecruitment',
	'type': 'internal',
	'text': 'Participant recruitment',
	'link': '5'
}, {
	'id': 'intPreparation',
	'type': 'internal',
	'text': 'Specialized preparation',
	'link': '6'
}, {
	'id': 'intDuration',
	'type': 'internal',
	'text': 'Duration / breaks',
	'link': '7'
}, {
	'id': 'intIdeation',
	'type': 'internal',
	'text': 'Ideation',
	'link': '8'
}, {
	'id': 'intTeam',
	'type': 'internal',
	'text': 'Team formation',
	'link': '9'
}, {
	'id': 'intAgenda',
	'type': 'internal',
	'text': 'Agenda',
	'link': '10'
}, {
	'id': 'intMentor',
	'type': 'internal',
	'text': 'Mentoring',
	'link': '11'
}, {
	'id': 'intContinuity',
	'type': 'internal',
	'text': 'Continuity planning',
	'link': '12'
}, {
	'id': 'schulten2022howdo',
	'type': 'pub',
	'text': 'Schulten, C., Nolte, A., Spikol, D., & Chounta, I.-A. (2022). How do participants collaborate during an online hackathon? An empirical, quantitative study of communication traces. <i>Frontiers in Computer Science</i>, 4.',
	'title': 'How do participants collaborate during an online hackathon? An empirical, quantitative study of communication traces. <i>Frontiers in Computer Science</i>',
	'abstract': 'Starting as niche programming events, hackathons have since become a popular form of collaboration. Events are organized in various domains across the globe, aiming to foster innovation and learning, create and expand communities and tackle civic and environmental issues. While research around such events has grown in recent years, most studies are based on observations of a few individuals during an event and on post-hoc interviews during which participants report their experiences. Such studies are helpful but somewhat limited in that they do not allow us to study how individuals communicate at scale using technology. To address this gap, we conducted an archival analysis of communication traces of teams during a 48-h event. Our findings indicate that teams scaffold their communication around the design of an event, influenced by milestones set by the organizers. The officially selected communication platform\'s main use was to organize the event and the teams and to facilitate contact between participants and hackathon officials. We further investigated the balance of intra-team communication on the given platform and the potential use of additional communication tools.',
	'link': 'Schulten-Frontiers-2022.pdf'
}, {
	'id': 'feislachen2022sentiment',
	'type': 'pub',
	'text': 'Feislachen, S., Garus, P., Wang, H., Podkolin, E., Schl&uuml;ter, S., Schulze Bernd, N., Manske, S., Nolte, A., & Chounta, I.-A. (2022). Sentiment Analysis of Participants Interactions in a Hackathon Context: The Example of a Slack Corpus. In: <i>Mensch und Computer</i> (pp. 493-497).',
	'title': 'Sentiment Analysis of Participants Interactions in a Hackathon Context: The Example of a Slack Corpus. <i>Mensch und Computer</i>',
	'abstract': 'This paper presents the analysis of participants’ interactions during an online hackathon using Natural Language Processing (NLP) techniques. In particular, we explored the communication of groups facilitated by Slack focusing on the use of emojis. Our findings suggest that most used emojis are positive, while negative emojis appeared rarely. Sentiment of written messages was overall positive and could be linked to topics such as motivation or achievements. Topics about participants’ disappointment regarding their progress or the hackathon organization, technical issues and criticism were associated with negative sentiment. We envision that our work offers insights regarding online communication in group and collaborative contexts with an emphasis on group work and interest-based activities.',
	'link': 'Feislachen-MUC-2022.pdf'
}, {
	'id': 'pe2022corporate',
	'type': 'pub',
	'text': 'Pe-Than, E. P. P., Nolte, A., Filippova, A., Bird, C., Scallen, S., & Herbsleb, J. D. (2022). Corporate Hackathons, How and Why? A Multiple Case Study of Motivation, Project Proposal and Selection, Goal Setting, Coordination, and Project Continuation. <i>Human-Computer Interaction</i>, 37(4), 281-313.',
	'title': 'Corporate Hackathons, How and Why? A Multiple Case Study of Motivation, Project Proposal and Selection, Goal Setting, Coordination, and Project Continuation. <i>Human-Computer Interaction</i>',
	'abstract': 'Time-bounded events such as hackathons, data dives, codefests, hack-days, sprints or edit-a-thons have increasingly gained attention from practitioners and researchers. Yet there is a paucity of research on corporate hackathons, which are nearly ubiquitous and present significant organizational, cultural, and managerial challenges. To provide a comprehensive understanding of team processes and broad array of outcomes of corporate hackathons, we conducted a mixed-methods, multiple case study of five teams that participated in a large scale corporate hackathon. Two teams were “pre-existing” teams (PETs) and three were newly-formed “flash” teams (FTs). Our analysis revealed that PETs coordinated almost as if it was just another day at the office while creating innovations within the boundary of their regular work, whereas FTs adopted role-based coordination adapted to the hackathon context while creating innovations beyond the boundary of their regular work. Project sustainability depended on how much effort the team put into finding a home for their projects and whether their project was a good fit with existing products in the organization’s product portfolio. Moreover, hackathon participation had perceived positive effects on participants’ skills, careers, and social networks.',
	'link': 'Pethan-HCI-2022.pdf'
}, {
	'id': 'imam2022oneoff',
	'type': 'pub',
	'text': 'Imam Mahmoud, A. S., Dey, T., Nolte, A., Mockus, A., & Herbsleb, J. D. (2022). One-off events? An empirical study of hackathon code creation and reuse. <i>Empirical Software Engineering</i>, 27.',
	'title': 'One-off events? An empirical study of hackathon code creation and reuse. <i>Empirical Software Engineering</i>',
	'abstract': '<br/><strong>Context</strong><br/>Hackathons have become popular events for teams to collaborate on projects and develop software prototypes. Most existing research focuses on activities during an event with limited attention to the evolution of the hackathon code.<br/><strong>Objective</strong><br/>We aim to understand the evolution of code used in and created during hackathon events, with a particular focus on the code blobs, specifically, how frequently hackathon teams reuse pre-existing code, how much new code they develop, if that code gets reused afterwards, and what factors affect reuse.<br/><strong>Method</strong><br/>We collected information about 22,183 hackathon projects from Devpost and obtained related code blobs, authors, project characteristics, original author, code creation time, language, and size information from World of Code. We tracked the reuse of code blobs by identifying all commits containing blobs created during hackathons and identifying all projects that contain those commits. We also conducted a series of surveys in order to gain a deeper understanding of hackathon code evolution that we sent out to hackathon participants whose code was reused, whose code was not reused, and developers who reused some hackathon code.<br/><strong>Result</strong><br/>9.14% of the code blobs in hackathon repositories and 8% of the lines of code (LOC) are created during hackathons and around a third of the hackathon code gets reused in other projects by both blob count and LOC. The number of associated technologies and the number of participants in hackathons increase reuse probability.<br/><strong>Conclusion</strong><br/>The results of our study demonstrates hackathons are not always “one-off” events as the common knowledge dictates and it can serve as a starting point for further studies in this area.',
	'link': 'Imam-EMSE-2022.pdf'
}, {
	'id': 'mendes2022sociotechnical',
	'type': 'pub',
	'text': 'Mendes, W., Richard, A., Tillo, T.-K., Pinto, G., Gama, K., & Nolte, A. (2022). Socio-technical constraints and affordances of virtual collaboration - A study of four online hackathons. <i>Proc. ACM Hum.-Comput. Interact.</i>',
	'title': 'Socio-technical constraints and affordances of virtual collaboration - A study of four online hackathons. <i>Proceedings of the ACM on Human Computer Interaction</i>',
	'abstract': 'Hackathons and similar time-bounded events have become a popular form of collaboration. They are commonly organized as in-person events during which teams engage in intense collaboration over a short period of time to complete a project that is of interest to them. Most research to date has focused on studying how teams collaborate in a co-located setting, pointing towards the advantages of radical co-location. The global pandemic of 2020, however, has led to many hackathons moving online, which challenges our current understanding of how they function. In this paper, we address this gap by presenting findings from a multiple-case study of 10 hackathon teams that participated in 4 hackathons across two continents. By analyzing the collected data, we found that teams merged synchronous and asynchronous means of communication to maintain a common understanding of work progress as well as to maintain awareness of each other\'s tasks. Task division was self-assigned based on individual skills or interests, while leaders emerged from different strategies (e.g., participant experience, the responsibility of registering the team in an event). Some of the affordances of in-person hackathons, such as the radical co-location of team members, could be partially reproduced in teams that kept synchronous communication channels while working (i.e., shared audio territories), in a sort of "radical virtual co-location". However, others, such as interactions with other teams, easy access to mentors, and networking with other participants, decreased. In addition, the technical constraints of the different communication tools and platforms brought technical problems and were overwhelming to participants. Our work contributes to understanding the virtual collaboration of small teams in the context of online hackathons and how technologies and event structures proposed by organizers imply this collaboration.',
	'link': 'Mendes-CSCW-2022.pdf'
}, {
	'id': 'affia2022integrating',
	'type': 'pub',
	'text': 'Affia, A. O., Nolte, A., &amp; Matulevi&#269;ius, R. (2022). Integrating Hackathons into an Online Cybersecurity Course. In: <i>44th International Conference on Software Engineering: Software Engineering Education and Training</i>.',
	'title': 'Integrating Hackathons into an Online Cybersecurity Course. <i>IEEE/ACM International Conference on Software Engineering</i>',
	'abstract': 'Cybersecurity educators have widely introduced hackathons to facilitate practical knowledge gaining in cybersecurity education. Introducing such events into cybersecurity courses can provide valuable learning experiences for students. The nature of the hackathon format encourages a learning-by-doing approach, and the hackathon outcomes can serve as evidence for students knowledge, capability and learning gains. Prior work on hackathons in education mainly focused on collocated hackathon events in the traditional classroom setting. These hackathon events often took place as a one-off event at the end of the course. However, one-off hackathon events at the end of a course might not be sufficient to improve learning. Instead, we focus on analyzing the integration of a series of online hackathon events into an online cybersecurity course and explore how this integration can address online education issues by encouraging collaboration and developing a practical understanding of the delivered course by solving real-world challenges. We evaluate interventions to foster learning and analyze its effect on collaboration and learning gains for students in the course. Our findings indicate that students attribute learning benefits to the introduced interventions that supported teamwork and collaboration, maintained student participation and interest in the course, and encouraged learning-by-doing.',
	'link': 'Affia-ICSE-2022.pdf'
}, {
	'id': 'imam2021secret',
	'type': 'pub',
	'text': 'Imam Mahmoud, A. S., Dey, T., Nolte, A., Mockus, A., & Herbsleb, J. D. (2021). The Secret Life of Hackathon Code - Where does it come from and where does it go? In: <i>Proceedings of the 2021 IEEE/ACM 18th International Conference on Mining Software Repositories</i> (pp. 68-79).',
	'title': 'The Secret Life of Hackathon Code - Where does it come from and where does it go? <i>IEEE/ACM International Conference on Mining Software Repositories</i>',
	'abstract': 'Background: Hackathons have become popular events for teams to collaborate on projects and develop software prototypes. Most existing research focuses on activities during an event with limited attention to the evolution of the code brought to or created during a hackathon. Aim: We aim to understand the evolution of hackathon-related code, specifically, how much hackathon teams rely on pre-existing code or how much new code they develop during a hackathon. Moreover, we aim to understand if and where that code gets reused, and what factors affect reuse. Method: We collected information about 22,183 hackathon projects from DevPost - a hackathon database -- and obtained related code (blobs), authors, and project characteristics from the World of Code. We investigated if code blobs in hackathon projects were created before, during, or after an event by identifying the original blob creation date and author, and also checked if the original author was a hackathon project member. We tracked code reuse by first identifying all commits containing blobs created during an event before determining all projects that contain those commits. Result: While only approximately 9.14% of the code blobs are created during hackathons, this amount is still significant considering time and member constraints of such events. Approximately a third of these code blobs get reused in other projects. The number of associated technologies and the number of participants in a project increase reuse probability. Conclusion: Our study demonstrates to what extent pre-existing code is used and new code is created during a hackathon and how much of it is reused elsewhere afterwards. Our findings help to better understand code reuse as a phenomenon and the role of hackathons in this context and can serve as a starting point for further studies in this area.',
	'link': 'Imam-MSR-2021.pdf'
}, {
	'id': 'powell2021organizing',
	'type': 'pub',
	'text': 'Powell, J., Hayden, L. B., Cannon, A., Wilson, B., & Nolte, A. (2021) Organizing online hackathons for newcomers to a scientific community – Lessons learned from two events. In: <i>Proceedings of the 6th International Conference on Game Jams, Hackathons, and Game Creation Events</i> (pp. 78–82).',
	'title': 'Organizing online hackathons for newcomers to a scientific community – Lessons learned from two events. <i>International Conference on Game Jams, Hackathons, and Game Creation Events</i>',
	'abstract': 'Acquiring computing skills is essential not only to work in computer science but also because many impactful discoveries occur at the interface between traditional scientific disciplines and computing and data science. Time-bounded events such as hackathons can provide an opportunity for newcomers to experience programming firsthand in a collaborative environment. Just providing access to computational resources, however, is not sufficient because newcomers will likely require guidance and support in order for them to perceive their participation in a hackathon as a positive experience propelling them to future success in the subject. We have developed a hackathon format for this purpose that we have successfully applied during in-person events for two years. The global pandemic of 2020, however, forced us to move towards a virtual format. In this paper, we report on our experience making this transition. We will specifically elaborate on two online events, discuss successes and failures and provide suggestions for hackathon organizers.',
	'link': 'Powell-ICGJ-2021.pdf'
}, {
	'id': 'leemet2021utilizing',
	'type': 'pub',
	'text': 'Leemet, A., Milani, F., & Nolte, A. (2021). Utilizing Hackathons to Foster Sustainable Product Innovation - The Case of a Corporate Hackathon Series. In: <i>Proceedings of the 2021 IEEE/ACM 13th International Workshop on Cooperative and Human Aspects of Software Engineering</i> (pp. 51-60).',
	'title': 'Utilizing Hackathons to Foster Sustainable Product Innovation - The Case of a Corporate Hackathon Series. <i>IEEE/ACM International Workshop on Cooperative and Human Aspects of Software Engineering</i>',
	'abstract': 'In order to remain competitive, software companies need to continuously develop new or advance existing products. In recent years, they have increasingly turned towards organizing hackathons for this purpose. During such events, teams of employees engage in intense collaboration over a short period of time to complete a project that is of interest to them. While research on hackathons has been growing steadily in recent years, there is a lack of studies focusing on the continuation of hackathon projects after an event has ended in particular in a corporate context. Our study aims to contribute to existing work in this area by focusing on a corporate hackathon series that was organized by a medium-sized Eastern European software company. Our findings support and extend prior research by indicating that teams consisting of members who aim to improve their skills, that engage in project focused preparation, focus on developing a functioning prototype that is aimed at the current customer base, easy to integrate, and related to existing products during the hackathon, had their projects continued in the case we studied. Moreover, we found indications for organizational commitment in the form of resources to continue a project after an event to predicate project integration. We also identified potential barriers towards this resource allocation related to prioritization and prior commitments of the organizational unit that was projected to continue a hackathon project after the event in the case we studied.',
	'link': 'Leemet-CHASE-2021.pdf'
}, {
	'id': 'medina2021supporting',
	'type': 'pub',
	'text': 'Medina Angarita, M. A., & Nolte, A. (2021). Supporting Entrepreneurship with Hackathons - A Study on Startup Founders Attending Hackathons. In: <i>International Conference on Software Business</i> (pp. 107-121).',
	'title': 'Supporting Entrepreneurship with Hackathons - A Study on Startup Founders Attending Hackathons. <i>International Conference on Software Business</i>',
	'abstract': 'Entrepreneurial hackathons are generally perceived to foster the creation of new startups, support networking, and acquire entrepreneurial skills. Current research work about entrepreneurial hackathons focuses on reporting the perceived benefits of the participants. However, little is known about why startup founders initially participate in hackathons, how they perceive the impact of participating on their entrepreneurial journey, and how different hackathon settings can affect their perception. To address this gap, we conducted an interview study with startup founders who have participated in hackathons. Our findings indicate that founders are mainly motivated to participate in hackathons in relation to their startups to learn about the topic of their startup and train the prototyping skills of their startup team. Moreover, we found that the initial intentions of startup founders could change during the hackathon.',
	'link': 'Medina-ICSOB-2021.pdf'
}, {
	'id': 'nolte2020mentor',
	'type': 'pub',
	'text': 'Nolte, A., Hayden, L. B., & Herbsleb, J. D. (2020). How to Support Newcomers in Scientific Hackathons - An Action Research Study on Expert Mentoring. <i>Proc. ACM Hum.-Comput. Interact.</i>, 4(CSCW1), Article 25 (May 2020), 23 pages.',
	'title': 'How to Support Newcomers in Scientific Hackathons - An Action Research Study on Expert Mentoring. <i>Proceedings of the ACM on Human Computer Interaction</i>',
	'abstract': 'Time-bounded events such as hackathons have become a global phenomenon. Scientific communities in particular show growing interest in organizing them to attract newcomers and develop technical artifacts to expand their code base. Current hackathon approaches presume that participants have sufficient expertise to work on projects on their own. They only provide occasional support by domain experts serving as mentors which might not be sufficient for newcomers. Drawing from work on workplace and educational mentoring, we developed and evaluated an approach where each hackathon team is supported by a community member who serves in a mentor role that goes beyond providing occasional support. Evaluating this approach, we found that teams who took ownership of their projects, set achievable goals early while building social ties with their mentor and receiving learning-oriented support reported positive perceptions related to their project and an increased interest in the scientific community that organized the hackathon. Our work thus contributes to our understanding of mentoring in hackathons, an area which has not been extensively studied. It also proposes a feasible approach for scientific communities to attract and integrate newcomers which is crucial for their long-term survival.',
	'link': 'Nolte-CSCW-2020.pdf'
}, {
	'id': 'nolte2020what',
	'type': 'pub',
	'text': 'Nolte, A., Chounta, I.-A., & Herbsleb, J. D. (2020). What Happens to All These Hackathon Projects? - Identifying Factors to Promote Hackathon Project Continuation. <i>Proc. ACM Hum.-Comput. Interact.</i>, 4(CSCW2), Article 145 (October 2020), 26 pages.',
	'title': 'What Happens to All These Hackathon Projects? - Identifying Factors to Promote Hackathon Project Continuation. <i>Proceedings of the ACM on Human Computer Interaction</i>',
	'abstract': 'Time-based events, such as hackathons and codefests, have become a global phenomenon attracting thousands of participants to hundreds of events every year. While research on hackathons has grown considerably, there is still limited insight into what happens to hackathon projects after the event itself has ended. While case studies have provided rich descriptions of hackathons and their aftermath, we add to this literature a large-scale quantitative study of continuation across hackathons in a variety of domains. Our findings indicate that a considerable number of projects get continued after a hackathon has ended. Our results also suggest that short- and long-term continuation are different phenomena. While short-term continuation is associated with technical preparation, number of technologies used in a project and winning a hackathon, long-term continuation is predicated on skill diversity among team members, their technical capabilities in relationship to the technologies and their intention to expand the reach of a project. Moreover, we found intensive short-term activity to be associated with a lower likelihood of long-term project continuation.',
	'link': 'Nolte-CSCW-2020_2.pdf'
}, {
	'id': 'medina2020what',
	'type': 'pub',
	'text': 'Medina Angarita, M. A., & Nolte, A. (2020). What do we know about hackathon outcomes and how to support them? – A systematic literature review. In: <i>Collaboration Technologies and Social Computing</i>.',
	'title': 'What do we know about hackathon outcomes and how to support them? – A systematic literature review. <i>Collaboration Technologies and Social Computing</i>',
	'abstract': 'Hackathons are time-bounded events where participants gather in teams to develop projects that interest them. Such events have been adopted in various domains to generate innovative solutions, foster learning, build and expand communities and to tackle civic and ecological issues. While research interest has also grown subsequently, most studies focus on singular events in specific domains. A systematic overview of the current state of the art is currently missing. Such an overview is however crucial to further study the hackathon phenomenon, understand its underlying mechanisms and develop support for hackathon organizers, in particular related to the sustainability of hackathon outcomes. This paper fills that gap by reporting on the results of a systematic literature review thus providing an overview of potential hackathon outcomes, design aspects and connections between them that have been addressed in prior work. Our findings also outline gaps in prior work e.g. related to the lack of work focusing on hackathon outcomes other than hackathon projects.',
	'link': 'Medina-Collabtech-2020.pdf'
}, {
	'id': 'affia2020developing',
	'type': 'pub',
	'text': 'Affia, A. O., Nolte, A., &amp; Matulevi&#269;ius, R. (2020). Developing and Evaluating a Hackathon Approach to Foster Security Learning. In: <i>Collaboration Technologies and Social Computing</i>.',
	'title': 'Developing and Evaluating a Hackathon Approach to Foster Security Learning. <i>Collaboration Technologies and Social Computing</i>',
	'abstract': 'Securing information systems and teaching people about how to use them securely is one of the significant challenges of the coming years. There is, however, a considerable lack of feasible approaches to train potential future professionals on security. Hackathons appear to be a good approach because studies have found them to not only be useful to teach participants but also to encourage people to explore the security of information systems. Such benefits cannot materialize without careful planning though. In our paper, we propose and evaluate a set of interventions aimed at fostering security learning amongst hackathon participants. Evaluating our approach, we found that emphasizing the need for idea generation, introducing security talks relevant to the ideas generated, interaction with mentors that come from diverse backgrounds, and the introduction of incentives can encourage security learning among participants.',
	'link': 'Affia-Collabtech-2020.pdf'
}, {
	'id': 'medina2019does',
	'type': 'pub',
	'text': 'Medina Angarita, M. A., & Nolte, A. (2019). Does it matter why we hack? - Exploring the impact of goal alignment in hackathons. In: <i>Proceedings of 17th European Conference on Computer-Supported Cooperative Work</i>.',
	'title': 'Does it matter why we hack? - Exploring the impact of goal alignment in hackathons. <i>European Conference on Computer-Supported Cooperative Work</i>',
	'abstract': 'Time-bounded events such as hackathons have become increasingly popular in recent years. During these events participants typically form teams, exercise fast prototype development, challenge themselves to innovate, practice new skills, collaborate with diverse team members, and compete against other teams. Hackathon organizers have a certain vision in mind about which outcome they would like to achieve and design the event based on this vision. Participants on the other hand do not necessarily share the same vision and come with their own goals and aspirations. While work in related fields suggests that it is important for goals of organizers and participants to align in order to achieve them this might be different in hackathons due to their unique setup. Drawing from literature we identified potential goals of organizers and participants and conducted a case study of three hackathons focusing on the alignment of goals between organizers and participants. Our findings indicate that the goals of organizers and participants did not align in all cases, that goal awareness on the part of the organizers appears may have a stronger impact on goal achievement and that hackathons appear to have inherent characteristics that can materialize even when not planned for.',
	'link': 'Medina-ECSCW-2019.pdf'
}, {
	'id': 'nolte2019touched',
	'type': 'pub',
	'text': 'Nolte, A. (2019). Touched by the Hackathon: A Study on the Connection between Hackathon Participants and Start-Up Founders. In: <i>International Workshop on Software-intensive Business 2019: Start-ups, Ecosystems and Platforms (IWSiB 2019)</i> (pp. 31-36).',
	'title': 'Touched by the Hackathon: A Study on the Connection between Hackathon Participants and Start-Up Founders. <i>ACM SIGSOFT International Workshop on Software-Intensive Business: Start-ups, Platforms and Ecosystems</i>',
	'abstract': 'Time-bounded events such as hackathons, code fests and others have become a global phenomenon. Entrepreneurial hackathons in particular have gained wide spread popularity because they come with the prospect to being the grounds where the next billion dollar enterprise is born. There is however limited insight into whether and how hackathons participants and start-up founders are connected beyond studies on singular events focusing on hackathons as a starting point for start-ups. To address this gap we conducted a study on a dataset covering 44 hackathons over three years and 489 start-ups in the North-Eastern European country of Estonia. Our findings indicate that hackathons are not always the start of an entrepreneurial endeavor but can also be useful through later stages as a means to develop future products, find future employees and others. The results presented in this paper are based on an initial analysis of this rich dataset and thus present the starting point of a larger study on the connection between the hackathon and start-up communities which is currently in planning.',
	'link': 'Nolte-SIGSOFT-workshop-2019.pdf'
}, {
	'id': 'pe2019understanding',
	'type': 'pub',
	'text': 'Pe-Than, E. P. P., & Herbsleb, J.D. (2019). Understanding Hackathons for Science: Collaboration, Affordances, and Outcomes. In: <i>International Conference on Information</i> (pp. 27-37).',
	'title': 'Understanding Hackathons for Science: Collaboration, Affordances, and Outcomes. In <i>International Conference on Information</i>',
	'abstract': 'Nowadays, hackathons have become a popular way of bringing people together to engage in brief, intensive collaborative work. Despite being a brief activity, being collocated with team members and focused on a task \'radical collocation\' could improve collaboration of scientific software teams. Using a mixed-methods study of participants who attended two hackathons at Space Telescope Science Institute (STScI), we examined how hackathons can facilitate collaboration in scientific software teams which typically involve members from two different disciplines: science and software engineering. We found that hackathons created a focused interruption-free working environment in which team members were able to assess each other\'s skills, focus together on a single project and leverage opportunities to exchange knowledge with other collocated participants, thereby allowing technical work to advance more efficiently. This study suggests hacking" as a new and productive form of collaborative work in scientific software production.',
	'link': 'Pethan-iConference-2019.pdf'
}, {
	'id': 'pe2019designing',
	'type': 'pub',
	'text': 'Pe-Than, E. P. P., Nolte, A., Filippova, A., Bird, C., Scallen, S. & Herbsleb, J. D. (2019). Designing Corporate Hackathons With a Purpose. <i>IEEE Software</i>, 36(1), 15-22.',
	'title': 'Designing Corporate Hackathons With a Purpose. <i>IEEE Software</i>',
	'abstract': 'In hackathons, small teams work together over a specified period of time to complete a project of interest. Hackathons have become increasingly popular as a means to surface and prototype innovative and creative ideas for products, but their impact often goes beyond product innovation. Based on our empirical studies of 10 hackathons held by scientific communities, a corporation, and universities as well as the review of published literature, we discuss that hackathons can be organized around goals such as enriching social networks, facilitating collaborative learning, and workforce development. We also discuss design choices that can scaffold the organization of hackathons and their trade-offs. Design choices include identifying a suitable mixture of attendee skills, the selection process for projects and teams, and whether to hold a competitive or collaborative event. Hackathons can achieve multiple goals if designed carefully.',
	'link': 'Pethan-IEEESW-2019.pdf'
}, {
	'id': 'pe2019science',
	'type': 'pub',
	'text': 'Pe-Than, E. P. P., Momcheva, I., Tollerud, E., & Herbsleb, J. D. (2019). Hackathons for Science, How and Why? Poster presented at the <i>233rd Meeting of the American Astronomical Society</i>, AAS Meeting #233, id.459.11.',
	'title': 'Hackathons for Science, How and Why? <i>233rd Meeting of the American Astronomical Society</i>',
	'abstract': 'Based on our empirical studies of 14 hackathons held by a corporation (Microsoft OneWeek Hackathon), universities, and scientific communities including three hack days at Space Telescope Science Institute (STScI), we will present how hackathons can be designed to achieve specific goals in a semi-academic environment like STScI. Our recommendations are derived from the analysis of data collected through ethnographic observations, interviews, and questionnaires. Hackathons are not only a good way to foster innovation but also to provide learning and knowledge exchange opportunities, to create new and enhance existing social connections, to exercise new technical and leadership opportunities, and to get the needed work done or to make a quick progress on technical work. However, designing a hackathon involves careful upfront planning, project selection, team formation, goal setting, and follow-up activities. Before the hackathon, the organizers should ask potential participants to propose project ideas (e.g., highest priority needed work in the case of STScI), and elicit their skills, expertise, and project preference. The organizers should form teams by matching participants\' skills to required skills for the projects. The resulting teams consist of a mix of members with varying levels of expertise. It is advisable for teams to perform preparatory work which includes appointing a team lead and having pre-event meetings where they discuss their plan for the event, break the projects into small individual tasks, assign tasks to team members, and familiarize themselves with the environment, project, and task. The organizers should advise teams to set realistic goals for the event and keep track of their progress toward these goals. At the end of the event, the organizers should advise teams to present their accomplishment and future plans, and encourage them to plan for future collaboration and designate a person to keep track of the progress. Examples include using the common free time to work side-by-side and self-organizing mini-hackathons (e.g., lunch hacks). With careful consideration of activities mentioned above, hackathons may provide a fruitful avenue of collaboration between astronomers and software experts.',
	'link': 'Pethan-AAS-poster-2019.pdf'
}, {
	'id': 'pe2019the2nd',
	'type': 'pub',
	'text': 'Pe-Than, E. P. P., & Nolte, A. (2019). The 2nd Workshop on Hacking and Making at Time-Bounded Events. <i>arXiv preprint, arXiv:1901.02710</i>',
	'title': 'The 2nd Workshop on Hacking and Making at Time-Bounded Events. <i>arXiv preprint</i>',
	'abstract': 'In hackathons, small teams work together over a specified period of time to complete a project of interest. Such time-bounded hackathon-style events have become increasingly popular across different domains in recent years. Collegiate hackathons, just one of the many variants of hackathons, that are supported by the largest hackathon league (https://mlh.io/) alone attract over 65,000 participants among more than 200 events each year. Variously known as data dives, codefests, hack-days, sprints, edit-a-thons, mapathons, and so on, such events vary depending on different audiences and with divergent aims: for example, whether teams know each other beforehand, whether the event is structured as a competition with prizes, whether the event is open or requires membership or invitations, and whether the desired outcome is primarily a product innovation, learning a new skill, forming a community around a cause, solving a technical problem that requires intensive focus by a group, or just having fun. Taken together, hackathons offer new opportunities and challenges for collaboration by affording explicit, predictable, time-bounded spaces for collaborative work and engaging with new audiences. With the goal of discussing opportunities and challenges surrounding hackathons of different kinds, this one-day workshop brought together researchers, experienced event organizers, and practitioners to share and discuss their practical experiences. Empirical insights from studying these events may help position the CHI community to better study, plan and design hackathon-style events as socio-technical systems that support new modes of production and collaboration.',
	'link': 'Pethan-Techreport-2018.pdf'
}, {
	'id': 'powell2018science',
	'type': 'pub',
	'text': 'Powell, J., Hayden, L. B., Nolte, A., Herbsleb, J. D., Pe-Than, E. P. P., Wong, M., Kalyanam, R., Ellet, K., Pamidighantam, S., Traxler, K., & Cannon, A. (2018). An Analysis of the PEARC 2018 Science Gateways Community Institute Hackathon: Lessons Learned. Poster presented at <i>Gateways 2018</i>.',
	'title': 'An Analysis of the PEARC 2018 Science Gateways Community Institute Hackathon: Lessons Learned. <i>Gateways 2018</i>',
	'abstract': 'Science Gateways are web portals on which data, software, instruments, and computing resources provide users, and scientists streamlined workflows through dynamically coded frontends. These web portals allow scientist to focus on research with little to no need to utilize programmatic skills. Hackathons are time-bounded events in which collaborators intensely focus on a given subject or problem in an effort to generate solutions. Hackathon events provide opportunities for participants with diverse backgrounds, mixed specialties, and broad skill sets to interact in a manner that promotes disruptive solutions. Hackathons come in a variety of different forms and serve many different purposes. These purposes include developing resources, infrastructure, practices, and culture for a community. The Science Gateways Community Institute team proposed a hackathon to introduce students attending the PEARC 2018 conference, to the concepts of Science Gateways. The aim of the hackathon was to stimulate interest in Science Gateways while developing projects that were of value to researchers from different disciplines. They believed that PEARC would be an ideal venue for this type of event, due to the community of researchers, students, and practitioners from various disciplines that were interested and skilled in the high-performance computing field attending the conference. The Science Gateways Community Institute utilized a hackathon formatted event to provide students with an opportunity to collaborate and generate targeted skills while creating needed features for production web portals. The student participants included a group of 17 graduate and undergraduate students with predominately underrepresented minorities. The hackathon followed the PEARC 2018 conference held in Pittsburgh, PA. The science gateways targeted during the event were MyGeoHub (Purdue University), Cosmic2 (San Diego Supercomputing Center), and SimCCS (Indiana University) with associated mentors serving as subject matter experts. This poster presents organizational methods and technologies used to coordinate the international planning team, lessons learned during the event, and deliverables presented by the student teams.',
	'link': 'SGCI-poster-2018.pdf'
}, {
	'id': 'nolte2018you',
	'type': 'pub',
	'text': 'Nolte, A., Pe-Than, E. P. P., Filippova, A., Bird, C., Scallen, S., & Herbsleb, J. D. (2018). You Hacked and Now What? - Exploring Outcomes of a Corporate Hackathon. <i>Proc. ACM Hum.-Comput. Interact.</i>, 2(CSCW), 129:1-129:23.',
	'title': 'You Hacked and Now What? - Exploring Outcomes of a Corporate Hackathon. <i>Proceedings of the ACM on Human Computer Interaction</i>',
	'abstract': 'Time bounded events such as hackathons, data dives, codefests, hack-days, sprints or edit-a-thons have increasingly gained attention from practitioners and researchers. Existing research, however, has mainly focused on the event itself, while potential outcomes of hackathons have received limited attention. Furthermore, most research around hackathons focuses on collegiate or civic events. Research around hackathons internal to tech companies, which are nearly ubiquitous, and present significant organizational, cultural, and managerial challenges, remains scarce. In this paper we address this gap by presenting findings from a case study of five teams which participated in a large scale corporate hackathon. Most team members voiced their intentions to continue the projects their worked on during the hackathon, but those whose projects did get continued were characterized by meticulous preparation, a focus on executing a shared vision during the hackathon, extended dissemination activities afterwards and a fit to existing product lines. Such teams were led by individuals who perceived the hackathon as an opportunity to bring their idea to life and advance their careers, and who recruited teams who had a strong interest in the idea and in learning the skills necessary to contribute efficiently. Our analysis also revealed that individual team members perceived hackathon participation to have positive effects on their career parts, networks and skill development.',
	'link': 'Nolte-CSCW-2018.pdf'
}, {
	'id': 'filippova2017from',
	'type': 'pub',
	'text': 'Filippova, A., Trainer, E., & Herbsleb, J. D. (2017). From diversity by numbers to diversity as process: supporting inclusiveness in software development teams with brainstorming. In: <i>2017 IEEE/ACM 39th International Conference on Software Engineering (ICSE)</i> (pp. 152-163).',
	'title': 'From diversity by numbers to diversity as process: supporting inclusiveness in software development teams with brainstorming. <i>IEEE/ACM International Conference on Software Engineering</i>',
	'abstract': 'Time-bounded events such as hackathons, data dives, codefests, hack-days, sprints or edit-a-thons have increasingly gained attention from practitioners and researchers. Yet there is a paucity of research on corporate hackathons, which are nearly ubiquitous and present significant organizational, cultural, and managerial challenges. To provide a comprehensive understanding of team processes and broad array of outcomes of corporate hackathons, we conducted a mixed-methods, multiple case study of five teams that participated in a large scale corporate hackathon. Two teams were “pre-existing” teams (PETs) and three were newly-formed “flash” teams (FTs). Our analysis revealed that PETs coordinated almost as if it was just another day at the office while creating innovations within the boundary of their regular work, whereas FTs adopted role-based coordination adapted to the hackathon context while creating innovations beyond the boundary of their regular work. Project sustainability depended on how much effort the team put into finding a home for their projects and whether their project was a good fit with existing products in the organization’s product portfolio. Moreover, hackathon participation had perceived positive effects on participants’ skills, careers, and social networks.',
	'link': 'Filippova-ICSE-2017.pdf'
}, {
	'id': 'filippova2017the1st',
	'type': 'pub',
	'text': 'Filippova, A, & Trainer, E. (2017). Technical Report for the 1st Workshop on Hacking and Making at Time-Bounded Events. <i>Technical Report CMU-ISR</i>, CMU-ISR-17-104',
	'title': 'Technical Report for the 1st Workshop on Hacking and Making at Time-Bounded Events. <i>Technical Report CMU-ISR</i>',
	'abstract': 'Time-bounded collaborative events in which teams work together under intense time pressure are becoming increasingly popular. In 2015, collegiate hackathons alone attracted over 54,000 participants across 150 events. While hackathons", that is, competitive overnight coding events, are one of the more prevalent examples of this phenomenon, there are many more distinct event design variations for different audiences and with divergent aims: "sprints" bring together existing communities to advance planned work, "code fests" bring together related communities to encourage interoperability, "hack-days" and "hack-weeks" teach hacking and making skills to diverse audiences without software backgrounds, like artists and scientists, "edit-a-thons" support intensive co-generation of encyclopedia content, and so on. Taken together, these events offer new opportunities and challenges for cooperative work by affording explicit, predictable, time-bounded spaces for interdependent work and access to new audiences of collaborators. This one-day workshop brought together: researchers interested in the phenomenon, experienced event organizers, and participants interested in running their own events. The workshop aimed to facilitate consolidating existing research, sharing practical experiences, and understanding what benefits different event variations may offer, how they may be applied in other contexts, and how insights from studying these events may contribute to CSCW knowledge.',
	'link': 'Filippova-Techreport-2017.pdf'
}, {
	'id': 'trainer2017mentor',
	'type': 'pub',
	'text': 'Trainer, E. H., Kalyanasundaram, A., & Herbsleb, J. D. (2017). E-Mentoring for Software Engineering: a Socio-Technical Perspective. In: <i>Proceedings of the 2017 IEEE/ACM 39th International Conference on Software Engineering: Software Engineering Education and Training Track</i> (pp. 107-116).',
	'title': 'E-Mentoring for Software Engineering: a Socio-Technical Perspective. <i>IEEE/ACM International Conference on Software Engineering</i>',
	'abstract': 'Mentoring is one of the most effective pedagogical tools, holding great promise for software engineering education. When done badly, however, it can lead to dysfunctional interpersonal relationships and may turn off mentees from careers in software engineering. In this qualitative interview-based study we examine how socio-technical dimensions of software impact the formation of social ties important for satisfying two goals of mentorship, building technical skill and interpersonal development. We find that mentees working on user facing, interdependent software form a balance of ties that facilitate both goals, while mentees working on non-user facing software mostly form ties important for building technical skill. Work practices that create opportunities for unstructured contact between mentees and community members, such as code review in a mentee cohort, can help to overcome this imbalance. Our findings have important implications for task definition in software engineering e-mentoring program schemes.',
	'link': 'Trainer-ICSE-2017.pdf'
}, {
	'id': 'trainer2016how',
	'type': 'pub',
	'text': 'Trainer, E. H., Kalyanasundaram, A., Chaihirunkarn, C., & Herbsleb, J. D. (2016). How to Hackathon: Socio-technical Tradeoffs in Brief, Intensive Collocation. In: <i>Proceedings of the 19th ACM Conference on Computer Supported Cooperative Work & Social Computing</i> (pp. 1118-1130).',
	'title': 'How to Hackathon: Socio-technical Tradeoffs in Brief, Intensive Collocation. <i>ACM Conference on Computer Supported Cooperative Work & Social Computing</i>',
	'abstract': 'Hackathons are events where people who are not normally collocated converge for a few days to write code together. Hackathons, it seems, are everywhere. We know that long- term collocation helps advance technical work and facilitate enduring interpersonal relationships, but can similar benefits come from brief, hackathon-style collocation? How do participants spend their time preparing, working face-to- face, and following through these brief encounters? Do the activities participants select suggest a tradeoff between the social and technical benefits of collocation? We present results from a multiple-case study that suggest the way that hackathon-style collocation advances technical work varies across technical domain, community structure, and expertise of participants. Building social ties, in contrast, seems relatively constant across hackathons. Results from different hackathon team formation strategies suggest a tradeoff between advancing technical work and building social ties. Our findings have implications for technology support that needs to be in place for hackathons and for understanding the role of brief interludes of collocation in loosely-coupled, geographically distributed work.',
	'link': 'Trainer-CSCW-2016.pdf'
}, {
	'id': 'trainer2015from',
	'type': 'pub',
	'text': 'Trainer, E. H., Chaihirunkarn, C., Kalyanasundaram, A., & Herbsleb, J. D. (2015). From Personal Tool to Community Resource: What’s the Extra Work and Who Will Do It? In: <i>Proceedings of the 18th ACM Conference on Computer Supported Cooperative Work & Social Computing</i> (pp. 417-430).',
	'title': 'From Personal Tool to Community Resource: What’s the Extra Work and Who Will Do It? <i>ACM Conference on Computer Supported Cooperative Work & Social Computing</i>',
	'abstract': 'Sharing scientific data, software, and instruments is becoming increasingly common as science moves toward large-scale, distributed collaborations. Sharing these resources requires extra work to make them generally useful. Although we know much about the extra work associated with sharing data, we know little about the work associated with sharing contributions to software, even though software is of vital importance to nearly every scientific result. This paper presents a qualitative, interview-based study of the extra work that developers and end users of scientific software undertake. Our findings indicate that they conduct a rich set of extra work around community management, code maintenance, education and training, developer-user interaction, and foreseeing user needs. We identify several conditions under which they are likely to do this work, as well as design principles that can facilitate it. Our results have important implications for future empirical studies as well as funding policy.',
	'link': 'Trainer-CSCW-2015.pdf'
}, {
	'id': 'trainer2014community',
	'type': 'pub',
	'text': 'Trainer, E. H., Chaihirunkarn, C., Kalyanasundaram, A., & Herbsleb, J. D. (2014). Community Code Engagements: Summer of Code & Hackathons for Community Building in Scientific Software. In: <i>Proceedings of the 18th International Conference on Supporting Group Work</i> (pp. 111-121.).',
	'title': 'Community Code Engagements: Summer of Code & Hackathons for Community Building in Scientific Software. <i>International Conference on Supporting Group Work</i>',
	'abstract': 'Community code engagements, short-term, intensive software development event, are used by some scientific communities to create new software features and promote community building. But there is as yet little empirical support for their effectiveness. This paper presents a qualitative study of two types of community code engagements: Google Summer of Code (GSoC) and hackathons. We investigated the range of outcomes these engagements produce and the underlying practices that lead to these outcomes. In GSoC, the vision and experience of core members of the community influence project selection, and the intensive mentoring process facilitates creation of strong ties. Most GSoC projects result in stable features. The agenda setting phase of hackathons reveals high priority issues perceivedby the community. Social events among the relatively large numbers of participants over brief engagements tend to create weak ties. Most hackathons result in prototypes rather than finished tools. We discuss themes and tradeoffs that suggest directions for future empirical work around designing community code engagements.',
	'link': 'Trainer-GROUP-2014.pdf'
}, {
	'id': 'trainer2014big',
	'type': 'pub',
	'text': 'Trainer, E. H., Chaihirunkarn C., &amp; Herbsleb, J. D. (2014). The Big Effects of Short-term Efforts: Mentorship and Code Integration in Open Source Scientific Software. <i>Journal of Open Research Software</i>, 2(1), 1-5.',
	'title': 'The Big Effects of Short-term Effort: Mentorship and Code Integration in Open Source Scientific Software. <i>Journal of Open Research Software</i>',
	'abstract': 'Scientific progress relies crucially on software, yet in practice there are significant challenges to scientific software production and maintenance. We conducted a case study of a bioinformatics software library called Biopython to investigate the promise of Google Summer of Code (GSoC), a program that pays students to work on open-source projects for the summer, for addressing these challenges. We find three positive outcomes of GSoC in the Biopython community: the addition of new features to the Biopython codebase, training, and personal development. We also find, however, that mentors face several challenges related to GSoC project selection and ranking. We believe that because GSoC provides an occasion to extend the software with capabilities that can be used to produce new knowledge, and to train successive generations of potential contributors to the software, it can play a vital role in the sustainability of open-source scientific software.',
	'link': 'Trainer-JORSW-2014.pdf'
}, {
	'id': 'cfaplaybook',
	'type': 'guide',
	'text': 'Code for America - Brigade Organizer\'s Playbook',
	'details': 'This organizer\'s playbook was built from Code for America\'s research about how to build sustainable civic hacking groups and bring 21st century government practices and products to the cities. This guide contains various check-lists essential for organizing, building, and infrastructure development.',
	'link': 'code-for-America-playbook.pdf'
}, {
	'id': 'mlhplaybook',
	'type': 'guidelink',
	'text': 'Major League Hacking (MLH) - The MLH Hackathon Organizer Guide',
	'details': 'Major League Hacking (MLH) is the official student hackathon league launched in 2013 in the United States. Each year, MLH powers over 200 weekend-long invention competitions that inspire innovation, cultivate communities and teach computer science skills to more than 65,000 students around the world. MLH organizer\'s guide is an essential resource for student hackathon organizers as it contains lots of lessons that MLH and the hackathon community around the world have learnt from organizing the hackathons. This guide organizes activities that organizers need to perform by timeline and also includes other useful resources such as example documents for budget and volunteer guides as well as software for hackathon.',
	'link': 'https://guide.mlh.io/'
}, {
	'id': 'opendataplaybook',
	'type': 'guidelink',
	'text': 'Open Data Day DC by Joshua Tauberer - How to run a successful hackathon (Open Data Day DC)',
	'details': 'This guide is created out of the author\'s experience of running 5 successful years of Open Data Day DC and other civic hackathosn that they involved in. In addition to providing basic requirements and logistics for hackathon, this guide touches one of the important and hardest topics of welcoming and onboarding newcomers as well as cultivating good hackahton projects.',
	'link': 'https://hackathon.guide/'
}, {
	'id': 'chiplaybook',
	'type': 'guide',
	'text': 'Chicago Civic Tech - @Civicwhitaker Anthology',
	'details': 'This is the comprehensive collection of civic hackahtons and other connected events that served a basis for the formation and evolution of the Chicago\'s Civic Tech Ecosystem.',
	'link': 'civicwhitaker-anthology.pdf'
}, {
	'id': 'playbookguide',
	'type': 'guide',
	'text': 'Hackathon Playbook',
	'details': 'This playbook outlines the guidlines for desiging corporate hackathons which is organized into three phases: preparation, hack time, and post-event. It also includes additional useful information regarding how to be a good hackathon judge and how to be a successful hackahton participant as well as when to use one of the two most common styles of hackathons: presentation and science fair.',
	'link': 'hackathon-playbook-external.pdf'
}, {
	'id': 'healthplaybook',
	'type': 'guide',
	'text': 'Health Hackathon Handbook - MIT Hacking Medicine',
	'details': 'This guide provides the who, what, when, where, and how essentials of a health hackthon.',
	'link': 'health-hackathon-handbook.pdf'
}, {
	'id': 'earthplaybook',
	'type': 'guide',
	'text': 'The complete guide to organizing a successful hackathon - Hackerearth',
	'details': 'This guide constructed based on the expertise gleaned from conducting over 800+ hackathons provides an overview of best practices that will help organizers to ensure that their hackathons will provide incredible experience for participants and sponsors. It focuses on two formats of hackathons: offline and online, and outlines the processes for each hackahton format starting from the selection of themes, target audience, format, timing, judges, promotion, etc.',
	'link': 'hackerearth.pdf'
}, {
	'id': 'playbook',
	'type': 'pub',
	'text': 'Hackathon playbook',
	'link': 'hackathon-playbook-external.pdf'
}, {
	'id': 'zapico2013hacking',
	'type': 'pubnopdf',
	'text': 'Zapico, J. L., Pargman, D., Ebner, H., & Eriksson, E. (2013). Hacking sustainability: Broadening participation through green hackathons. In <i>Fourth International Symposium on End-User Development</i>.'
}, {
	'id': 'flow',
	'type': 'pubnopdf',
	'text': 'Csikszentmihalyi, M. (1997). Flow and the psychology of discovery and invention. HarperPerennial, New York.'
}, {
	'id': 'greatmentor',
	'type': 'external',
	'text': 'https://www.forbes.com/sites/carriekerpen/2018/06/18/5-things-great-mentors-do/',
	'link': 'https://www.forbes.com/sites/carriekerpen/2018/06/18/5-things-great-mentors-do/'
}, {
	'id': 'perfectmentor',
	'type': 'external',
	'text': 'https://www.perfektio.fi/en/blog/how-to-be-a-mentor',
	'link': 'https://www.perfektio.fi/en/blog/how-to-be-a-mentor'
}, {
	'id': 'g48mentor',
	'type': 'external',
	'text': 'https://garage48.org/blog/how-to-mentor-teams-at-a-hackathon',
	'link': 'https://garage48.org/blog/how-to-mentor-teams-at-a-hackathon'
}, {
	'id': 'g48cyber',
	'type': 'external',
	'text': 'http://garage48.org/events/garage48-cyber-security-2019',
	'link': 'http://garage48.org/events/garage48-cyber-security-2019'
}, {
	'id': 'g48how',
	'type': 'external',
	'text': 'http://garage48.org/how-it-works',
	'link': 'http://garage48.org/how-it-works'
}, {
	'id': 'startupsfromhackathons',
	'type': 'external',
	'text': 'https://www.valuer.ai/blog/50-startups-that-came-from-hackathons',
	'link': 'https://www.valuer.ai/blog/50-startups-that-came-from-hackathons'
}, {
	'id': 'woc',
	'type': 'external',
	'text': 'https://github.com/woc-hack',
	'link': 'https://github.com/woc-hack'
}, {
	'id': 'woctutorial',
	'type': 'external',
	'text': 'https://github.com/woc-hack/tutorial',
	'link': 'https://github.com/woc-hack/tutorial'
}, {
	'id': 'wocschedule',
	'type': 'external',
	'text': 'https://github.com/woc-hack/schedule',
	'link': 'https://github.com/woc-hack/schedule'
}, {
	'id': 'sgci2019',
	'type': 'external',
	'text': 'https://sciencegateways.org/web/wd/hackathon-2019',
	'link': 'https://sciencegateways.org/web/wd/hackathon-2019'
}, {
	'id': 'brainhack',
	'type': 'external',
	'text': 'https://ohbm.github.io/hackathon2018/',
	'link': 'https://ohbm.github.io/hackathon2018/'
}, {
	'id': 'icebreaker',
	'type': 'external',
	'text': 'https://www.tinypulse.com/blog/sk-work-icebreaker-games',
	'link': 'https://www.tinypulse.com/blog/sk-work-icebreaker-games'
}, {
	'id': 'nofun',
	'type': 'external',
	'text': 'https://medium.com/@sathishvj/please-dont-organize-fun-activities-at-hackathons-a3333f0bbc2c',
	'link': 'https://medium.com/@sathishvj/please-dont-organize-fun-activities-at-hackathons-a3333f0bbc2c'
}, {
	'id': 'hackbox',
	'type': 'external',
	'text': 'https://formidable.com/work/hackbox/',
	'link': 'https://formidable.com/work/hackbox/'
}, {
	'id': 'steelhacks',
	'type': 'external',
	'text': 'http://steelhacks.com/',
	'link': 'http://steelhacks.com/'
}, {
	'id': 'dayofcivichacking',
	'type': 'external',
	'text': 'https://www.codeforamerica.org/events/national-day-of-civic-hacking-2019',
	'link': 'https://www.codeforamerica.org/events/national-day-of-civic-hacking-2019'
}, {
	'id': 'greenhackathon',
	'type': 'external',
	'text': 'http://www.greenhackathon.com/',
	'link': 'http://www.greenhackathon.com/'
}, {
	'id': 'brainstorm',
	'type': 'external',
	'text': 'https://www.wikihow.com/Brainstorm',
	'link': 'https://www.wikihow.com/Brainstorm'
}, {
	'id': 'brainstormquestion',
	'type': 'external',
	'text': 'https://medium.com/brainfuel/7-tricks-to-build-the-perfect-brainstorming-question-f74a6ddc8a78',
	'link': 'https://medium.com/brainfuel/7-tricks-to-build-the-perfect-brainstorming-question-f74a6ddc8a78'
}, {
	'id': 'oneweek',
	'type': 'external',
	'text': 'https://news.microsoft.com/life/one-week-microsoftlife/',
	'link': 'https://news.microsoft.com/life/one-week-microsoftlife/'
}, {
	'id': 'chihacknight',
	'type': 'external',
	'text': 'https://chihacknight.org/',
	'link': 'https://chihacknight.org/'
}, {
	'id': 'chihacknightprojects',
	'type': 'external',
	'text': 'https://chihacknight.org/projects.html',
	'link': 'https://chihacknight.org/projects.html'
}, {
	'id': 'codecademy',
	'type': 'external',
	'text': 'https://www.codecademy.com/learn/learn-python-3',
	'link': 'https://www.codecademy.com/learn/learn-python-3'
}, {
	'id': 'astrohackweek',
	'type': 'external',
	'text': 'http://astrohackweek.org/2020/',
	'link': 'http://astrohackweek.org/2020/'
}, {
	'id': 'geohackweek',
	'type': 'external',
	'text': 'https://geohackweek.github.io/',
	'link': 'https://geohackweek.github.io/'
}, {
	'id': 'hackweektoolkit',
	'type': 'external',
	'text': 'https://uwescience.github.io/HackWeek-Toolkit/',
	'link': 'https://uwescience.github.io/HackWeek-Toolkit/'
}, {
	'id': 'hackweektoolkitrecruit',
	'type': 'external',
	'text': 'https://uwescience.github.io/HackWeek-Toolkit/#Objectives/Objectives-and-Goals/#target-audience-and-scoping-to-specific-communities',
	'link': 'https://uwescience.github.io/HackWeek-Toolkit/#Objectives/Objectives-and-Goals/#target-audience-and-scoping-to-specific-communities'
}, {
	'id': 'hackhpc',
	'type': 'external',
	'text': 'http://hackhpc.org/',
	'link': 'http://hackhpc.org/'
}, {
	'id': 'mlhmarketing',
	'type': 'external',
	'text': 'https://guide.mlh.io/digital-hackathons/marketing-your-event/how-to-promote-your-event',
	'link': 'https://guide.mlh.io/digital-hackathons/marketing-your-event/how-to-promote-your-event'
}, {
	'id': 'mlhsponsors',
	'type': 'external',
	'text': 'https://guide.mlh.io/digital-hackathons/getting-sponsorship',
	'link': 'https://guide.mlh.io/digital-hackathons/getting-sponsorship'
}, {
	'id': 'mlhjudging',
	'type': 'external',
	'text': 'https://guide.mlh.io/digital-hackathons/judging-and-submissions',
	'link': 'https://guide.mlh.io/digital-hackathons/judging-and-submissions'
}, {
	'id': 'mlhprizes',
	'type': 'external',
	'text': 'https://guide.mlh.io/digital-hackathons/event-logistics/ordering-swags-and-prizes',
	'link': 'https://guide.mlh.io/digital-hackathons/event-logistics/ordering-swags-and-prizes'
}, {
	'id': 'sheinnovates',
	'type': 'external',
	'text': 'http://sheinnovates.us/',
	'link': 'http://sheinnovates.us/'
}, {
	'id': 'entrofy',
	'type': 'external',
	'text': 'https://github.com/dhuppenkothen/entrofy',
	'link': 'https://github.com/dhuppenkothen/entrofy'
}, {
	'id': 'stakeholderanalysis',
	'type': 'external',
	'text': 'https://medium.com/the-value-maximizers/creating-a-stakeholder-analysis-how-do-you-do-that-b2b8198ca6c',
	'link': 'https://medium.com/the-value-maximizers/creating-a-stakeholder-analysis-how-do-you-do-that-b2b8198ca6c'
}, {
	'id': 'codeforpgh',
	'type': 'external',
	'text': 'https://www.meetup.com/codeforpgh/events/268968230/',
	'link': 'https://www.meetup.com/codeforpgh/events/268968230/'
}, {
	'id': 'biohack',
	'type': 'external',
	'text': 'http://hackathon.dbcls.jp/',
	'link': 'http://hackathon.dbcls.jp/'
}, {
	'id': 'debcamp',
	'type': 'external',
	'text': 'https://wiki.debian.org/DebCamp',
	'link': 'https://wiki.debian.org/DebCamp'
}, {
	'id': 'prizes',
	'type': 'external',
	'text': 'https://news.mlh.io/are-hackathon-prizes-the-worst-thing-since-moldy-sliced-bread-04-18-2014',
	'link': 'https://news.mlh.io/are-hackathon-prizes-the-worst-thing-since-moldy-sliced-bread-04-18-2014'
}, {
	'id': 'globalhack',
	'type': 'external',
	'text': 'https://theglobalhack.com/',
	'link': 'https://theglobalhack.com/'
}, {
	'id': 'openbio',
	'type': 'external',
	'text': 'https://www.open-bio.org/',
	'link': 'https://www.open-bio.org/'
}];

var goalReferences = ['intRecruitment', 'intStakeholder', 'medina2019does', 'filippova2017from', 'intIdeation', 'intDuration', 'intAgenda', 'g48cyber', 'pe2019understanding', 'globalhack', 'nolte2020mentor', 'intMentor', 'astrohackweek', 'woc', 'intContinuity', 'pe2022corporate', 'nolte2020what'];
var themeReferences = ['intGoal', 'intStakeholder', 'globalhack', 'woc', 'g48cyber', 'affia2020developing', 'astrohackweek', 'geohackweek', 'openbio', 'brainhack', 'zapico2013hacking', 'hackhpc', 'oneweek', 'pe2019understanding'];
var competitionReferences = ['intStakeholder', 'intRecruitment', 'intGoal', 'intTheme', 'biohack', 'debcamp', 'pe2019understanding', 'mlhjudging', 'playbook', 'nolte2018you', 'oneweek', 'prizes', 'mlhprizes', 'nolte2020what'];
var stakeholderReferences = ['intTheme', 'intContinuity', 'stakeholderanalysis', 'steelhacks', 'g48cyber', 'nolte2018you', 'chihacknightprojects', 'pe2019understanding', 'mlhsponsors', 'intMentor', 'nolte2020mentor', 'affia2020developing', 'codeforpgh', 'oneweek', 'intGoal'];
var recruitmentReferences = ['intGoal', 'intTheme', 'astrohackweek', 'geohackweek', 'mlhmarketing', 'intStakeholder', 'oneweek', 'pe2019understanding', 'pe2019designing', 'hackweektoolkit', 'wocschedule', 'intIdeation', 'intTeam', 'hackweektoolkitrecruit', 'nolte2020what', 'sheinnovates', 'entrofy'];
var preparationReferences = ['intTheme', 'intGoal', 'intTeam', 'intMentor', 'nolte2020mentor', 'nolte2020what', 'codecademy', 'intRecruitment', 'woc', 'astrohackweek', 'geohackweek', 'hackhpc', 'brainhack'];
var durationReferences = ['intRecruitment', 'intMentor', 'intStakeholder', 'intTheme', 'g48how', 'oneweek', 'chihacknight', 'intGoal', 'wocschedule', 'intTeam'];
var ideationReferences = ['filippova2017from', 'intStakeholder', 'intTheme', 'dayofcivichacking', 'greenhackathon', 'nolte2019touched', 'intGoal', 'pe2019understanding', 'intContinuity', 'flow', 'brainstorm', 'intMentor', 'brainstormquestion', 'intTeam', 'nolte2020what', 'intPreparation', 'affia2020developing', 'nolte2018you'];
var teamReferences = ['intRecruitment', 'intIdeation', 'intStakeholder', 'pe2022corporate', 'hackbox', 'pe2019understanding', 'steelhacks', 'intAgenda', 'intCompetition', 'intGoal', 'nolte2020mentor', 'intMentor', 'intTheme', 'nolte2020what'];
var agendaReferences = ['intStakeholder', 'intMentor', 'intTheme', 'intGoal', 'intRecruitment', 'woctutorial', 'intCompetition', 'intIdeation', 'intTeam', 'sgci2019', 'g48cyber', 'affia2020developing', 'intPreparation', 'brainhack', 'icebreaker', 'nofun', 'intDuration', 'nolte2020mentor'];
var mentoringReferences = ['intContinuity', 'intAgenda', 'intIdeation', 'nolte2020mentor', 'intPreparation', 'greatmentor', 'perfectmentor', 'g48mentor', 'intCompetition', 'affia2020developing'];
var continuityReferences = ['intGoal', 'intStakeholder', 'startupsfromhackathons', 'intAgenda', 'intIdeation', 'pe2022corporate', 'nolte2018you', 'intPreparation', 'nolte2020mentor', 'nolte2020what', 'intCompetition', 'medina2019does', 'intTeam', 'affia2020developing'];
var peerReviewReferences = ['imam2022oneoff', 'mendes2022sociotechnical', 'pe2022corporate', 'schulten2022howdo', 'affia2022integrating', 'feislachen2022sentiment', 'medina2021supporting', 'powell2021organizing','imam2021secret','nolte2020what', 'nolte2020mentor', 'medina2020what', 'affia2020developing', 'medina2019does', 'pe2019understanding', 'pe2019designing', 'nolte2018you', 'filippova2017from', 'trainer2017mentor', 'trainer2016how', 'trainer2015from', 'trainer2014community', 'trainer2014big'];
var workshopReferences = ['leemet2021utilizing','nolte2019touched', 'pe2019science', 'powell2018science', 'pe2019the2nd', 'filippova2017the1st'];
var guideReferences = ['cfaplaybook', 'mlhplaybook', 'opendataplaybook', 'chiplaybook', 'playbookguide', 'healthplaybook', 'earthplaybook'];

function printDecisionReference(decision, thisId) {
	var decisionReferences = getDecisionReferences(decision);
	var decisionNo = getDecisionNo(decision);
	
	for (var i = 0; i < decisionReferences.length; i++) {
		var id = decisionReferences[i];
		for (var j = 0; j < references.length; j++) {
			var reference = references[j];
			if (id == reference['id']) {
				if (reference['id'] == thisId) {
					document.write('<a href="#decisionsModal'+decisionNo+reference['id']+'">'+(i+1)+'</a>');
				}
			}
		}
	}
};

function printDecisionReferenceList(decision) {
	var decisionReferences = getDecisionReferences(decision);
	var decisionNo = getDecisionNo(decision);

	for (var i = 0; i < decisionReferences.length; i++) {
		var id = decisionReferences[i];
		for (var j = 0; j < references.length; j++) {
			var reference = references[j];
			if (id == reference['id']) {
				if (reference['type'] == 'internal') {
					document.write('<li id="decisionsModal'+decisionNo+reference['id']+'" class="list-item">Decision <a data-dismiss="modal" data-toggle="modal" href="#decisionsModal'+reference['link']+'">'+reference['text']+'</a></li>');
				} else if (reference['type'] == 'external') {
					document.write('<li id="decisionsModal'+decisionNo+reference['id']+'" class="list-item"><a href="'+reference['link']+'" target="_blank">'+reference['text']+'</a></li>');
				} else if (reference['type'] == 'pub') {
					document.write('<li id="decisionsModal'+decisionNo+reference['id']+'" class="list-item">'+reference['text']+' (<a href="files/'+reference['link']+'" target="_blank">pdf</a>)</li>');
				} else if (reference['type'] == 'pubnopdf') {
					document.write('<li id="decisionsModal'+decisionNo+reference['id']+'" class="list-item">'+reference['text']+'</li>');
				}
			}
		}
	}
};

function getDecisionReferences(decision) {
	if (decision == 'goal') {
		return goalReferences;
	} else if (decision == 'theme') {
		return themeReferences;
	} else if (decision == 'competition') {
		return competitionReferences;
	} else if (decision == 'stakeholder') {
		return stakeholderReferences;
	} else if (decision == 'recruitment') {
		return recruitmentReferences;
	} else if (decision == 'preparation') {
		return preparationReferences;
	} else if (decision == 'duration') {
		return durationReferences;
	} else if (decision == 'ideation') {
		return ideationReferences;
	} else if (decision == 'team') {
		return teamReferences;
	} else if (decision == 'agenda') {
		return agendaReferences;
	} else if (decision == 'mentor') {
		return mentoringReferences;
	} else if (decision == 'continuity') {
		return continuityReferences;
	}
};

function getDecisionNo(decision) {
	if (decision == 'goal') {
		return 1;
	} else if (decision == 'theme') {
		return 2;
	} else if (decision == 'competition') {
		return 3;
	} else if (decision == 'stakeholder') {
		return 4;
	} else if (decision == 'recruitment') {
		return 5;
	} else if (decision == 'preparation') {
		return 6;
	} else if (decision == 'duration') {
		return 7;
	} else if (decision == 'ideation') {
		return 8;
	} else if (decision == 'team') {
		return 9;
	} else if (decision == 'agenda') {
		return 10;
	} else if (decision == 'mentor') {
		return 11;
	} else if (decision == 'continuity') {
		return 12;
	}
};

function printPaperList(type) {
	var paperlist;
	if (type == 'peerreviewed') {
		paperlist = peerReviewReferences;
	} else if (type == 'workshops') {
		paperlist = workshopReferences;
	}

	for (var i = 0; i < paperlist.length; i++) {
		var id = paperlist[i];
		for (var j = 0; j < references.length; j++) {
			var reference = references[j];
			if (reference['id'] == id) {
				document.write('<li class="list-item">'+reference['title']+' (<a onclick="$(\'#pub'+reference['id']+'abstract\').slideToggle(\'slow\');">abstract</a>, <a onclick="$(\'#pub'+reference['id']+'reference\').slideToggle(\'slow\');">reference</a>, <a href="files/'+reference['link']+'" target="_blank">pdf</a>)<p id="pub'+reference['id']+'abstract" class="listtoggle text-muted"><b>Abstract:</b> '+reference['abstract']+'</p><p id="pub'+reference['id']+'reference" class="listtoggle text-muted"><b>Reference:</b> '+reference['text']+'</p></li>');
			}
		}
	}
};

function printGuideList() {
	for (var i = 0; i < guideReferences.length; i++) {
		var id = guideReferences[i];
		for (var j = 0; j < references.length; j++) {
			var reference = references[j];
			if (reference['id'] == id) {
				if (reference['type'] == 'guide') {
					document.write('<li class="list-item">'+reference['text']+' (<a onclick="$(\'#guide'+reference['id']+'details\').slideToggle(\'slow\');">details</a>, <a href="files/'+reference['link']+'" target="_blank">pdf</a>)<p id="guide'+reference['id']+'details" class="listtoggle text-muted">'+reference['details']+'</p></li>');
				} else if (reference['type'] == 'guidelink') {
					document.write('<li class="list-item">'+reference['text']+' (<a onclick="$(\'#guide'+reference['id']+'details\').slideToggle(\'slow\');">details</a>, <a href="'+reference['link']+'" target="_blank">link</a>)<p id="guide'+reference['id']+'details" class="listtoggle text-muted">'+reference['details']+'</p></li>');
				}
			}
		}
	}
};