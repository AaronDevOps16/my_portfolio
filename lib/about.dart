import 'package:flutter/material.dart';

class AboutSection extends StatelessWidget {
  final Key? sectionKey;
  const AboutSection({super.key, this.sectionKey});

  @override
  Widget build(BuildContext context) {
    return Container(
      key: sectionKey,
      height: MediaQuery.of(context).size.height,
      color: const Color.fromARGB(255, 34, 29, 29),
      padding: const EdgeInsets.symmetric(vertical: 60, horizontal: 16),
      alignment: Alignment.center,
      child: LayoutBuilder(
        builder: (context, constraints) {
          bool isWideScreen = constraints.maxWidth > 700;

          return ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: 1000),
            child: isWideScreen
                ? Row(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: _buildContent(isWideScreen),
                  )
                : Column(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: _buildContent(isWideScreen),
                  ),
          );
        },
      ),
    );
  }

  List<Widget> _buildContent(bool isWideScreen) {
    final image = ClipOval(
      child: Image.asset(
        'assets/images/profile.jpg',
        width: isWideScreen ? 220 : 140,
        height: isWideScreen ? 220 : 140,
        fit: BoxFit.cover,
      ),
    );

    final spacer = SizedBox(
      width: isWideScreen ? 32 : 0,
      height: isWideScreen ? 0 : 24,
    );

    final content = Container(
      width: isWideScreen ? null : double.infinity,
      child: Column(
        crossAxisAlignment:
            isWideScreen ? CrossAxisAlignment.start : CrossAxisAlignment.center,
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Text(
            'Hi I\'m Aaron',
            style: TextStyle(
              color: const Color.fromARGB(255, 155, 209, 235),
              fontSize: isWideScreen ? 30 : 24,
              fontWeight: FontWeight.bold,
            ),
          ),
          const SizedBox(height: 12),
          Wrap(
            spacing: 16,
            runSpacing: 8,
            alignment:
                isWideScreen ? WrapAlignment.start : WrapAlignment.center,
            children: const [
              _ContactInfo(
                icon: Icons.location_on,
                text: 'Manila, Philippines',
              ),
              _ContactInfo(
                icon: Icons.email,
                text: 'aaron.dev2898@gmail.com',
              ),
            ],
          ),
          const SizedBox(height: 18),
          const Text(
            "I'm a student and freelance Android developer with months of experience building Java-based mobile applications, primarily helping fellow students with academic and capstone projects. Now, I'm eager to apply my skills to real-world projects and contribute to impactful solutions.",
            style: TextStyle(
              color: Color.fromARGB(255, 209, 196, 196),
              fontSize: 16,
              height: 1.5,
            ),
            textAlign: TextAlign.justify,
          ),
        ],
      ),
    );

    return isWideScreen
        ? [image, spacer, Expanded(child: content)]
        : [image, spacer, content];
  }
}

class _ContactInfo extends StatelessWidget {
  final IconData icon;
  final String text;

  const _ContactInfo({
    super.key,
    required this.icon,
    required this.text,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        Icon(icon, color: const Color.fromARGB(255, 166, 202, 216)),
        const SizedBox(width: 4),
        Text(
          text,
          style: const TextStyle(
            color: Color.fromARGB(255, 166, 202, 216),
            fontSize: 15,
          ),
        ),
      ],
    );
  }
}
