import 'package:flutter/material.dart';

class ResumeSection extends StatelessWidget {
  final Key? sectionKey;

  const ResumeSection({super.key, this.sectionKey});

  final List<Map<String, String>> resume = const [
    {
      'title': 'Education and Experience',
      'description':
          'My education and experience in the field of Android development.'
    },
    {
      'year': '2020 - 2022',
      'title': 'Muntinlupa National Senior High School',
      'details':
          'I took Information and Communication Technology (ICT), where I completed my senior high school years. At that time, I didn’t have a desktop computer, so I learned to code using my cellphone. It was one of the best experiences because it happened during the pandemic, and I was still discovering and learning about the field I love.'
    },
    {
      'year': '2022 - 2026',
      'title': 'Pamantasan Lungsod ng Muntinlupa',
      'details':
          'I’m currently a BSIT student with hands-on experience in coding, freelancing, and client work. I started learning ICT in senior high school using just a cellphone during the pandemic. In my third year of college, I got my first laptop and began taking on real projects, thanks to the encouragement of a friend in the IT industry. While working at McDonald’s for 7 months, I managed my first freelance project, which became a turning point for me. I’ve since resigned to focus on freelancing and am now eager to apply and grow my skills through real-world opportunities.'
    },
    {
      'year': 'Present',
      'title': 'Freelance Android Developer',
      'details':
          'I’m a BSIT student currently focused on freelancing in Android development. I specialize in Java-based Android projects and actively help fellow students with their activities and capstone projects. I\'m now ready to apply my skills to real-world projects and continue growing as a developer.'
    },
  ];

  @override
  Widget build(BuildContext context) {
    return Container(
      key: sectionKey,
      padding: const EdgeInsets.symmetric(horizontal: 40, vertical: 60),
      color: const Color(0xFF1E1E1E),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Text(
            "Education and Experience",
            style: TextStyle(
              color: Colors.white,
              fontSize: 32,
              fontWeight: FontWeight.bold,
            ),
          ),
          const SizedBox(height: 10),
          Text(
            resume[0]['description']!,
            style: const TextStyle(
              color: Colors.white70,
              fontSize: 16,
            ),
          ),
          const SizedBox(height: 40),

          // Timeline starts here
          Column(
            children: List.generate(resume.length - 1, (index) {
              final item = resume[index + 1];
              final isLast = index == resume.length - 2;

              return Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // Dot and vertical line
                  Column(
                    children: [
                      Container(
                        width: 14,
                        height: 14,
                        decoration: BoxDecoration(
                          color: Colors.blueAccent,
                          shape: BoxShape.circle,
                        ),
                      ),
                      if (!isLast)
                        Container(
                          width: 2,
                          height: 80,
                          color: Colors.grey,
                        ),
                    ],
                  ),
                  const SizedBox(width: 16),

                  // Text content
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          item['year']!,
                          style: const TextStyle(
                            color: Colors.blueAccent,
                            fontWeight: FontWeight.bold,
                            fontSize: 14,
                          ),
                        ),
                        const SizedBox(height: 6),
                        Text(
                          item['title']!,
                          style: const TextStyle(
                            color: Colors.white,
                            fontSize: 18,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        const SizedBox(height: 6),
                        Text(
                          item['details']!,
                          style: const TextStyle(
                            color: Colors.white70,
                            fontSize: 14,
                          ),
                        ),
                        const SizedBox(height: 30),
                      ],
                    ),
                  ),
                ],
              );
            }),
          ),
        ],
      ),
    );
  }
}
