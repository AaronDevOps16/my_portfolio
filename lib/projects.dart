import 'dart:async';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'image_gallery_page.dart';


class ProjectsSection extends StatefulWidget {
  const ProjectsSection({super.key});

  @override
  State<ProjectsSection> createState() => _ProjectsSectionState();
}

class _ProjectsSectionState extends State<ProjectsSection> {
  final projects = [
    {
      'title': 'A Smart Pig Cage with QR-Based Monitoring and AI-Driven Health Analytics for Efficient Livestock Management',

      'status' : 'Personal Project: (Ongoing)',

          'description': 'This project is a smart pig farming management system that uses QR codes, smart cage tracking, '
        'and AI-powered health analytics. Each pig is assigned a unique QR code that can be scanned within the app '
        'to quickly access or update its information. Users can create cages, assign pigs to them, and generate '
        'custom QR codes for efficient tracking and management.\n\n'
        'The system also includes a Pig Status Advisory feature powered by Gemini AI. When the advisory button is tapped, '
        'Gemini analyzes environmental data—specifically temperature and humidity—to provide text-based insights about '
        'each pig’s health and comfort. The AI gives actionable recommendations to improve living conditions and prevent illness.\n\n'
                  'Note: Hardware integration sensors and ESP32 is currently in progress and has not yet been implemented in the live system. '
    'The application has been developed with future hardware compatibility in mind.',
        

        'Tech Tools': [
          'Android Studio IDE', 'Java','XML','Zxing QR', 'Visual Studio','Python Flask','Firebase Support','Gemini AI',   'Arduino IDE', 'DHT22', 'ESP32'
      
        ],

      'images': [
        'assets/images/pig/pig1.jpg',
        'assets/images/pig/pig2.jpg',
        'assets/images/pig/pig3.jpg',
        'assets/images/pig/pig4.jpg',
        'assets/images/pig/pig5.jpg',
        'assets/images/pig/pig6.jpg',
                'assets/images/pig/pig7.jpg',
                  
      ]
    },

      {
      'title': 'E-Learning App',
      
      'description': 'This fun and interactive e-learning app is specially designed for kids! It helps young learners explore numbers, shapes, the alphabet, and basic science through colorful visuals, engaging animations, and playful activities. Perfect for early education at home or in the classroom. \n\nThe app is currently in production and will be available soon on Google Play!',

       'status' : 'Side Project: (Finished)',

       'Tech Tools' : [
          'Android Java','XML','Canva', 'Lottie File', 'ElevenLabs AI Voice'
        ],

      'images': [
        'assets/images/e_learning/learn1.jpg',
        'assets/images/e_learning/learn2.jpg',
        'assets/images/e_learning/learn3.jpg',
        'assets/images/e_learning/learn4.jpg',
        'assets/images/e_learning/learn5.jpg',
        'assets/images/e_learning/learn6.jpg',
        'assets/images/e_learning/learn7.jpg',
        'assets/images/e_learning/learn8.jpg',
        'assets/images/e_learning/learn9.jpg',
        'assets/images/e_learning/learn10.jpg',
      ]
    },

      {
      'title': 'Philippine FolkTale Story Gamified Learning App',

             'status' : 'Side Project: (Ongoing)',

      'description': 'Dive into the rich world of Philippine folktales through this interactive, gamified learning app! Kids will enjoy beautifully narrated stories from Filipino culture, brought to life through engaging visuals and sound. \nAfter each storytelling session, learners go through 5 fun and educational stages that reinforce key elements of the story through quizzes, puzzles, and mini-games. Once all stages are completed, they unlock the next chapter in the adventure! \nThis app blends culture, literacy, and interactive learning—making it a perfect tool for early education and cultural appreciation. \n\n\nThis app will be implemented in google play soon :)',

       'Tech Tools' : [
          'Android Java','XML','Canva', 'CapCut', 'ElevenLabs AI Voice'
        ],

      'images': [
        'assets/images/folktales/folktales1.jpg',
        'assets/images/folktales/folktales2.jpg',
        'assets/images/folktales/folktales3.jpg',
        'assets/images/folktales/folktales4.jpg',
        'assets/images/folktales/folktales5.jpg',
        'assets/images/folktales/folktales6.jpg',
        'assets/images/folktales/folktales7.jpg',
        'assets/images/folktales/folktales8.jpg',
        'assets/images/folktales/folktales9.jpg',
        'assets/images/folktales/folktales10.jpg',
          'assets/images/folktales/folktales11.jpg',
        'assets/images/folktales/folktales12.jpg',
      ]
    },

      {
      'title': 'Hospital Transfer Patient',
          'status' : 'First Side Project: (Finished)',
      'description': 'This project is designed to facilitate transfer of patients between hospitals. It allows administrators from external hospitals to transfer patient information directly to Osmun Hospital in Muntinlupa City. The system ensures that patient data is transferred accurately and securely, helping improve coordination and continuity of care across medical institutions.',
      'Tech Tools' : [
          'Android Studio','Java','XML','Firebase Support', 
        ],
      'images': [
    'assets/images/hospital/hospital1.jpg',
    'assets/images/hospital/hospital2.jpg',
    'assets/images/hospital/hospital3.jpg',
    'assets/images/hospital/hospital4.jpg',
    'assets/images/hospital/hospital5.jpg',
    'assets/images/hospital/hospital6.jpg',
    'assets/images/hospital/hospital7.jpg',
    'assets/images/hospital/hospital8.jpg',
        'assets/images/hospital/hospital9.jpg',
      ]
    },
    // Add more projects here...
  ];

  late List<PageController> _controllers;
  late List<int> _currentPages;
  late List<Timer> _timers;

  @override
  void initState() {
    super.initState();
    _controllers = List.generate(
      projects.length,
      (_) => PageController(initialPage: 0),
    );
    _currentPages = List.generate(projects.length, (_) => 0);

    _timers = List.generate(projects.length, (index) {
      return Timer.periodic(const Duration(milliseconds: 1800), (timer) {
        final controller = _controllers[index];
        final nextPage = (_currentPages[index] + 1) % (projects[index]['images'] as List).length;


        if (controller.hasClients) {
          controller.animateToPage(
            nextPage.toInt(),
            duration: const Duration(milliseconds: 500),
            curve: Curves.easeInOut,
          );
          setState(() {
            _currentPages[index] = nextPage.toInt();
          });
        }
      });
    });
  }

  @override
  void dispose() {
    for (final controller in _controllers) {
      controller.dispose();
    }
    for (final timer in _timers) {
      timer.cancel();
    }
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints){
   final screenWidth = constraints.maxWidth;
      final isWide = screenWidth > 700;

        return Container(
        color: const Color.fromARGB(255, 34, 29, 29),
        padding: const EdgeInsets.symmetric(vertical: 60),
        child: Center(
          child: ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: 1000),
            child: SingleChildScrollView(
              child: Column(
                children: [
                  const Text(
                    'Projects',
                    style: TextStyle(color: Color.fromARGB(255, 155, 209, 235), fontSize: 30, fontWeight: FontWeight.bold),
                  ),
                  const SizedBox(height: 40),
                  ...List.generate(projects.length, (index) {
                    final project = projects[index];
                    final images = List<String>.from(project['images'] as List);
      final techTools = (project['Tech Tools'] as List<dynamic>?)?.cast<String>() ?? [];
      
                    final isEven = index % 2 == 0;
      final imageCarousel = isWide
    ? Column(
        children: [
          SizedBox(
            width: 220,
            height: 400,
            child: PageView.builder(
              controller: _controllers[index],
              itemCount: images.length,
              onPageChanged: (page) {
                setState(() {
                  _currentPages[index] = page;
                });
              },
              itemBuilder: (context, i) {
                return AspectRatio(
                  aspectRatio: 9 / 16,
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(8),
                    child: Image.asset(
                      images[i],
                      fit: BoxFit.contain,
                      filterQuality: FilterQuality.high,
                    ),
                  ),
                );
              },
            ),
          ),
          const SizedBox(height: 8),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: List.generate(images.length, (dotIndex) {
              return Container(
                margin: const EdgeInsets.symmetric(horizontal: 3),
                width: 8,
                height: 8,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  color: _currentPages[index] == dotIndex ? Colors.white : Colors.grey,
                ),
              );
            }),
          ),
        ],
      )
    : Center(
        child: Column(
          children: [
            SizedBox(
              width: 250,
              height: 200,
              child: PageView.builder(
                controller: _controllers[index],
                itemCount: images.length,
                onPageChanged: (page) {
                  setState(() {
                    _currentPages[index] = page;
                  });
                },
                itemBuilder: (context, i) {
                  return AspectRatio(
                    aspectRatio: 16 / 9,
                    child: ClipRRect(
                      borderRadius: BorderRadius.circular(8),
                      child: Image.asset(
                        images[i],
                        fit: BoxFit.contain,
                        filterQuality: FilterQuality.high,
                      ),
                    ),
                  );
                },
              ),
            ),
            const SizedBox(height: 8),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: List.generate(images.length, (dotIndex) {
                return Container(
                  margin: const EdgeInsets.symmetric(horizontal: 3),
                  width: 8,
                  height: 8,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    color: _currentPages[index] == dotIndex ? Colors.white : Colors.grey,
                  ),
                );
              }),
            ),
          ],
        ),
      );

      
                    final textInfo = Column(
                      mainAxisAlignment: MainAxisAlignment.start,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          project['title'] as String,
                          style: const TextStyle(
                            fontSize: 22,
                            fontWeight: FontWeight.bold,
                            color: Colors.white,
                          ),
                        ),
                        const SizedBox(height: 4),
                        Text(
                          (project['status'] ?? '') as String,
                          style: const TextStyle(
                            fontWeight: FontWeight.bold,
                            fontSize: 20,
                            color: Colors.yellow
                          
                          ),
                        ),
                        const SizedBox(height: 12),
                        Text(
                          project['description'] as String,
                          style: const TextStyle(color: Colors.white70, fontSize: 16),
                        ),
                        const SizedBox(height: 16),
                        Wrap(
                          spacing: 8,
                          runSpacing: 8,
                          children: techTools.map((tool){
                            return Container(
                              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                              decoration: BoxDecoration(
                                border: Border.all(color: Colors.blueGrey),
                                color: Colors.blueGrey,
                                borderRadius: BorderRadius.circular(20)
                              ),
                              child: Text(
                                tool,
                                style: const TextStyle(
                                  color: Colors.black, fontSize: 14
                                ),
                              ),
                            );
                          }).toList()
                        )
                      ],
                    );
      
                    return Padding(
                      padding: const EdgeInsets.only(bottom: 40),
                      child: GestureDetector(
                        onTap: () {
                        Navigator.push(
        context,
        MaterialPageRoute(
          builder: (_) => ImageGalleryPage(images: images),
        ),
      );
        },
                        child: Card(
                          color: const Color.fromARGB(255, 51, 51, 51),
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                          child: Padding(
                          padding: EdgeInsets.all(isWide ? 50 : 20),

                         child: isWide
    ? Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: isEven
            ? [
                Expanded(child: textInfo),
                const SizedBox(width: 20),
                imageCarousel,
              ]
            : [
                imageCarousel,
                const SizedBox(width: 20),
                Expanded(child: textInfo),
              ],
      )
    : Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          imageCarousel,
          const SizedBox(height: 20),
          textInfo,
        ],
      ),


                          ),
                        ),
                      ),
                    );
                  }),
                ],
              ),
            ),
          ),
        ),
      );
      },
    
    );
  }
}
