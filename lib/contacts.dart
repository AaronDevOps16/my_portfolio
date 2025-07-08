import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:url_launcher/url_launcher.dart';

class ContactsSection extends StatelessWidget {
  final Key? sectionKey;

  const ContactsSection({super.key, this.sectionKey});

  final List<Map<String, dynamic>> contacts = const [
    {
      'icon': Icons.email,
      'label': 'Email',
      'contact': 'aaron.dev2898@gmail.com',
      'url': 'mailto:aaron.dev2898@gmail.com',
    },
    {
      'icon': FontAwesomeIcons.facebook,
      'label': 'Facebook',
      'contact': 'Aaron Mercado',
      'url': 'https://www.facebook.com/aaron.ricafortmercado?mibextid=ZbWKwL',
    },
    {
      'icon': FontAwesomeIcons.github,
      'label': 'GitHub',
      'contact': 'Gazzel16',
      'url': 'https://github.com/Gazzel16',
    },
    {
      'icon': FontAwesomeIcons.linkedin,
      'label': 'LinkedIn',
      'contact': 'Aaron Mercado',
      'url': 'https://www.linkedin.com/in/aaron-mercado-163b02369/',
    },
  ];

  Future<void> _launchUrl(String url) async {
    final uri = Uri.parse(url);
    if (!await launchUrl(uri, mode: LaunchMode.externalApplication)) {
      throw 'Could not launch $url';
    }
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      key: sectionKey,
      color: const Color.fromARGB(255, 66, 66, 66),
      padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 30),
      alignment: Alignment.center,
      child: LayoutBuilder(
        builder: (context, constraints) {
          final isMobile = constraints.maxWidth < 600;

          return Wrap(
            alignment: WrapAlignment.center,
            spacing: isMobile ? 20 : 40,
            runSpacing: 20,
            children: contacts.map((contact) {
              return InkWell(
                onTap: () => _launchUrl(contact['url']),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    CircleAvatar(
                      backgroundColor: Colors.blueGrey,
                      radius: isMobile ? 28 : 32,
                      child: Icon(
                        contact['icon'],
                        size: isMobile ? 18 : 20,
                        color: Colors.white,
                      ),
                    ),
                    const SizedBox(height: 6),
                    Text(
                      contact['label'],
                      style: TextStyle(
                        color: Colors.white70,
                        fontSize: isMobile ? 11 : 12,
                      ),
                    ),
                  ],
                ),
              );
            }).toList(),
          );
        },
      ),
    );
  }
}
