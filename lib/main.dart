import 'package:flutter/material.dart';
import 'about.dart';
import 'projects.dart';
import 'resume.dart';
import 'techStack.dart';
import 'contacts.dart';
import 'package:flutter/gestures.dart';

void main() {
  runApp(const MyPortfolio());
}

class MyPortfolio extends StatelessWidget {
  const MyPortfolio({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Aaron\'s Portfolio',

      debugShowCheckedModeBanner: false,
            scrollBehavior: MyCustomScrollBehavior(),

      theme: ThemeData(
 
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
      ),
      home: const MyPortfolioHomePage(),
    );
  }
}

// ✅ Allow drag/swipe with mouse on web
class MyCustomScrollBehavior extends MaterialScrollBehavior {
  @override
  Set<PointerDeviceKind> get dragDevices => {
        PointerDeviceKind.touch,
        PointerDeviceKind.mouse,
        PointerDeviceKind.trackpad,
      };
}

class MyPortfolioHomePage extends StatefulWidget {
  const MyPortfolioHomePage({super.key});

 @override 
 State<MyPortfolioHomePage> createState() => _MyPortfolioHomePageState();

}

  class _MyPortfolioHomePageState extends State<MyPortfolioHomePage>{

List<Widget> _buildDesktopMenu() {
  return [
    _buildNavButton("About"),
    _buildNavButton("TechStack", label: "Skills and Technology"),
    _buildNavButton("Projects"),
    _buildNavButton("Resume", label: "Education And Experiences"),
    _buildNavButton("Contacts"),
  ];
}

Widget _buildNavButton(String section, {String? label}) {
  return TextButton(
    onPressed: () => _onMenuTap(section),
    child: Text(
      label ?? section,
      style: const TextStyle(
        color: Colors.white70,
        fontSize: 18,
        fontStyle: FontStyle.italic,
      ),
    ),
  );
}

Widget _buildDrawerItem(String section, {String? label}) {
  return ListTile(
    title: Text(
      label ?? section,
      style: const TextStyle(color: Colors.white70),
    ),
    onTap: () {
      Navigator.of(context).pop(); // close drawer
      _onMenuTap(section);
    },
  );
}


    final ScrollController _scrollController = ScrollController();

    final aboutKey = GlobalKey();
        final techStackKey = GlobalKey();
        final projectsKey  = GlobalKey();
            final resumeKey = GlobalKey();
             final contactsKey = GlobalKey();

    void _onMenuTap(String section){
      BuildContext? currentContext;

   switch (section) {
  case 'About':
    currentContext = aboutKey.currentContext;
    break;
  case 'TechStack':
  currentContext = techStackKey.currentContext;
  case 'Projects':
    currentContext = projectsKey.currentContext;
    break;
  case 'Resume':
    currentContext = resumeKey.currentContext;
    break;
  case 'Contacts':
  currentContext = contactsKey.currentContext;
  break;
}


   if (currentContext != null) {
    Scrollable.ensureVisible(
      currentContext,
      duration: const Duration(milliseconds: 500),
      curve: Curves.easeInOut,
    );
  }
      
    }

    @override
   void dispose(){
    _scrollController.dispose();
    super.dispose();
   }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: const Color.fromARGB(255, 34, 29, 29),
          title: const Text(
        'Aaron\'s Portfolio', 
        style: TextStyle(color: Color.fromARGB(179, 233, 233, 233), fontSize: 22, fontWeight: FontWeight.bold),
        ),
        actions: MediaQuery.of(context).size.width > 700
        ? _buildDesktopMenu()
        : null,
        iconTheme: const IconThemeData(color: Colors.white70),
      ),

      drawer: MediaQuery.of(context).size.width <= 700
    ? Drawer(
        backgroundColor: const Color.fromARGB(255, 34, 29, 29),
        child: ListView(
          padding: EdgeInsets.zero,
          children: [
            const DrawerHeader(
              decoration: BoxDecoration(
                color: Colors.black54,
              ),
              child: Text(
                'Portfolio',
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 24,
                ),
              ),
            ),
            _buildDrawerItem("About"),
            _buildDrawerItem("TechStack", label: "Skills and Technology"),
            _buildDrawerItem("Projects"),
            _buildDrawerItem("Resume", label: "Education And Experiences"),
            _buildDrawerItem("Contacts"),
          ],
        ),
      )
    : null,
    body: Container(
  color: const Color.fromARGB(255, 34, 29, 29),
  child: SingleChildScrollView(
  controller: _scrollController,
  child: Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
      AboutSection(key: aboutKey),
        TechStackSection(key: techStackKey),
      ProjectsSection(key: projectsKey),
      ResumeSection(key: resumeKey),
         ContactsSection(key: contactsKey),
    ],
  ),
),

),
      );
   
      
  }
}
