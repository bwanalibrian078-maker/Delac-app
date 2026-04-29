# Emily Institute of Education (DELAC-APP)

A mobile learning application built with React Native (Expo) and Supabase.

## 📱 Features

- **Student Portal:** View subjects, watch video lessons, and download notes.
- **Admin Dashboard:** Upload content, manage students, and post announcements.
- **Authentication:** Secure login and registration via Supabase.
- **Branding:** Customized with Emily Institute's Deep Blue and White theme.

## 🚀 Getting Started

### 1. Prerequisites
- Node.js installed
- Expo Go app on your mobile device (for testing)

### 2. Installation
```bash
# Extract the ZIP and enter the directory
cd delac-app

# Install dependencies
npm install
```

### 3. Supabase Setup
1. Create a project at [supabase.com](https://supabase.com).
2. Create the following tables:
   - `subjects` (id, name, code)
   - `lessons` (id, subject_id, title, video_url, note_url)
3. Update `services/supabase.js` with your Project URL and Public API Key.

### 4. Running the App
```bash
npx expo start
```
Scan the QR code with the Expo Go app on your phone.

## 📁 Project Structure
- `screens/`: Individual app screens (Login, Dashboard, Admin, etc.)
- `services/`: API and external service configurations.
- `assets/`: Images and static files.

## 🛠 Next Steps
- Implement Flutterwave/PayPal for paid content.
- Add real-time quiz and grading system.
- Build the APK for Android release.
