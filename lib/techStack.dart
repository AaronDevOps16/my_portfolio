import 'package:flutter/material.dart';

class TechStackSection extends StatelessWidget{
  final Key? sectionKey;

const TechStackSection({super.key, this.sectionKey});

final List<Map<String, String>> techTools = const [
    {'name': 'Firebase', 'asset': 'assets/images/tech_stack/firebase.png'},
    {'name': 'Java', 'asset': 'assets/images/tech_stack/java_logo.jpg'},
    {'name': 'Python', 'asset': 'assets/images/tech_stack/python_logo.jpg'},
    {'name': 'XML', 'asset': 'assets/images/tech_stack/xml_logo.jpg'},
    {'name': 'Postman', 'asset': 'assets/images/tech_stack/postman_logo.jpg'},
    {'name': 'Canva', 'asset': 'assets/images/tech_stack/canva_logo.jpg'},
    {'name': 'CapCut', 'asset': 'assets/images/tech_stack/capcut_logo.jpg'},
];
 @override
Widget build(BuildContext context) {
  return LayoutBuilder(
    builder: (context, constraints) {
      // Adjust card width based on screen width
      double maxWidth = constraints.maxWidth;
      double cardWidth = maxWidth > 800 ? 180 : maxWidth > 600 ? 150 : 120;

      return Center(
        child: Container(
          key: sectionKey,
          padding: const EdgeInsets.symmetric(vertical: 40, horizontal: 20),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              const Text(
                'Skills and Technology',
                style: TextStyle(
                  fontSize: 26,
                  color: Color.fromARGB(255, 155, 209, 235),
                  fontWeight: FontWeight.bold,
                ),
              ),
              const SizedBox(height: 30),

              Wrap(
                spacing: 20,
                runSpacing: 20,
                alignment: WrapAlignment.center,
                children: techTools.map((tool) {
                  return Card(
                    color: Colors.white,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(16),
                    ),
                    elevation: 4,
                    child: Container(
                      width: cardWidth,
                      padding: const EdgeInsets.all(16),
                      child: Column(
                        children: [
                          Image.asset(
                            tool['asset']!,
                            height: 100,
                            fit: BoxFit.contain,
                          ),
                          const SizedBox(height: 12),
                          // You can add label or text here if needed
                        ],
                      ),
                    ),
                  );
                }).toList(),
              ),
            ],
          ),
        ),
      );
    },
  );
}
}