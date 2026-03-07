// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Profile = () => {
//   const navigate = useNavigate();
  
//   // Sample user data - in real app, this would come from authentication/database
//   const [user, setUser] = useState({
//     name: 'john',
//     email: 'john.doe@example.com',
//     joinedDate: 'January 2024',
//     favoriteGenres: ['Pop', 'Rock', 'Jazz'],
//     recentMoods: ['Happy', 'Energetic', 'Relaxed']
//   });

//   const [isEditing, setIsEditing] = useState(false);
//   const [editData, setEditData] = useState({
//     name: user.name,
//     email: user.email
//   });

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleSave = () => {
//     setUser({
//       ...user,
//       name: editData.name,
//       email: editData.email
//     });
//     setIsEditing(false);
//     alert('Profile updated successfully!');
//   };

//   const handleCancel = () => {
//     setEditData({
//       name: user.name,
//       email: user.email
//     });
//     setIsEditing(false);
//   };

//   const handleChange = (e) => {
//     setEditData({
//       ...editData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleLogout = () => {
//     alert('Logged out successfully!');
//     navigate('/');
//   };

//   return (
//     <>
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
//         {/* Navigation */}
//         <nav className="bg-white shadow-md">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex justify-between items-center h-16">
//               <div className="flex items-center">
//                 <h1 className="text-2xl font-bold text-indigo-600">AMBI MOOD</h1>
//               </div>
//               <div className="flex space-x-8">
//                 <Link to="/" className="text-gray-700 hover:text-indigo-600 transition">Home</Link>
//                 <Link to="/about" className="text-gray-700 hover:text-indigo-600 transition">About</Link>
//                 <Link to="/contact" className="text-gray-700 hover:text-indigo-600 transition">Contact</Link>
//                 <Link to="/signup" className="text-gray-700 hover:text-indigo-600 transition">SignUp</Link>
//                 <Link to="/login" className="text-gray-700 hover:text-indigo-600 transition">Login</Link>
//                 <Link to="/profile" className="text-gray-700 hover:text-indigo-600 transition">Profile</Link>
//               </div>
//             </div>
//           </div>
//         </nav>

//         {/* Profile Content */}
//         <div className="p-8">
//           <div className="max-w-4xl mx-auto">
//             <h1 className="text-4xl font-bold text-gray-900 mb-8">User Profile</h1>
            
//             {/* Profile Card */}
//             <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
//               {/* Profile Header */}
//               <div className="flex items-center mb-6">
//                 <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
//                   {user.name.charAt(0)}
//                 </div>
//                 <div className="ml-6">
//                   <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
//                   <p className="text-gray-600">{user.email}</p>
//                   <p className="text-sm text-gray-500 mt-1">Member since {user.joinedDate}</p>
//                 </div>
//               </div>

//               {/* Profile Information */}
//               <div className="border-t pt-6">
//                 {!isEditing ? (
//                   <>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <div>
//                         <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Information</h3>
//                         <div className="space-y-3">
//                           <div>
//                             <label className="text-sm text-gray-600">Full Name</label>
//                             <p className="text-gray-900 font-medium">{user.name}</p>
//                           </div>
//                           <div>
//                             <label className="text-sm text-gray-600">Email</label>
//                             <p className="text-gray-900 font-medium">{user.email}</p>
//                           </div>
//                         </div>
//                       </div>

//                       <div>
//                         <h3 className="text-lg font-semibold text-gray-900 mb-2">Music Preferences</h3>
//                         <div className="space-y-3">
//                           <div>
//                             <label className="text-sm text-gray-600">Favorite Genres</label>
//                             <div className="flex flex-wrap gap-2 mt-1">
//                               {user.favoriteGenres.map((genre, index) => (
//                                 <span key={index} className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
//                                   {genre}
//                                 </span>
//                               ))}
//                             </div>
//                           </div>
//                           <div>
//                             <label className="text-sm text-gray-600">Recent Moods</label>
//                             <div className="flex flex-wrap gap-2 mt-1">
//                               {user.recentMoods.map((mood, index) => (
//                                 <span key={index} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
//                                   {mood}
//                                 </span>
//                               ))}
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="mt-6 flex gap-4">
//                       <button
//                         onClick={handleEdit}
//                         className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
//                       >
//                         Edit Profile
//                       </button>
//                       <button
//                         onClick={handleLogout}
//                         className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
//                       >
//                         Logout
//                       </button>
//                     </div>
//                   </>
//                 ) : (
//                   <>
//                     {/* Edit Mode */}
//                     <div className="space-y-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           Full Name
//                         </label>
//                         <input
//                           type="text"
//                           name="name"
//                           value={editData.name}
//                           onChange={handleChange}
//                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           Email Address
//                         </label>
//                         <input
//                           type="email"
//                           name="email"
//                           value={editData.email}
//                           onChange={handleChange}
//                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
//                         />
//                       </div>
//                     </div>

//                     <div className="mt-6 flex gap-4">
//                       <button
//                         onClick={handleSave}
//                         className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
//                       >
//                         Save Changes
//                       </button>
//                       <button
//                         onClick={handleCancel}
//                         className="bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-700 transition"
//                       >
//                         Cancel
//                       </button>
//                     </div>
//                   </>
//                 )}
//               </div>
//             </div>

//             {/* Activity Stats */}
//             {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               <div className="bg-white rounded-lg shadow-md p-6 text-center">
//                 <h3 className="text-3xl font-bold text-indigo-600">127</h3>
//                 <p className="text-gray-600 mt-2">Songs Recommended</p>
//               </div>
//               <div className="bg-white rounded-lg shadow-md p-6 text-center">
//                 <h3 className="text-3xl font-bold text-indigo-600">45</h3>
//                 <p className="text-gray-600 mt-2">Playlists Created</p>
//               </div>
//               <div className="bg-white rounded-lg shadow-md p-6 text-center">
//                 <h3 className="text-3xl font-bold text-indigo-600">89</h3>
//                 <p className="text-gray-600 mt-2">Mood Detections</p>
//               </div>
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Profile;





// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Profile = () => {
//   const navigate = useNavigate();
  
//   const [user, setUser] = useState({
//   // ✅ change this for profile
//   name: localStorage.getItem('userName') || 'Your Name',
//   email: localStorage.getItem('userEmail') || '@example.com',
//   joinedDate: 'January 2024',
//   favoriteGenres: ['Pop', 'Rock', 'Jazz'],
//   recentMoods: ['Happy', 'Energetic', 'Relaxed']
// });

//   const [isEditing, setIsEditing] = useState(false);
//   const [editData, setEditData] = useState({
//     name: user.name,
//     email: user.email
//   });

//   const handleEdit = () => setIsEditing(true);

//   const handleSave = () => {
//     setUser({ ...user, name: editData.name, email: editData.email });
//     setIsEditing(false);
//   };

//   const handleCancel = () => {
//     setEditData({ name: user.name, email: user.email });
//     setIsEditing(false);
//   };

//   const handleChange = (e) => {
//     setEditData({ ...editData, [e.target.name]: e.target.value });
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('userName');
//   localStorage.removeItem('userEmail');
//     navigate('/');
//   };

//   const styles = {
//     page: {
//       minHeight: '100vh',
//       background: 'linear-gradient(135deg, #0a0a0f 0%, #1a0533 50%, #0d0d1a 100%)',
//       fontFamily: "'DM Sans', sans-serif",
//       position: 'relative',
//       overflow: 'hidden',
//     },
//     orb1: {
//       position: 'fixed',
//       width: '400px',
//       height: '400px',
//       background: 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)',
//       top: '-100px',
//       left: '-100px',
//       borderRadius: '50%',
//       pointerEvents: 'none',
//     },
//     orb2: {
//       position: 'fixed',
//       width: '350px',
//       height: '350px',
//       background: 'radial-gradient(circle, rgba(236,72,153,0.2) 0%, transparent 70%)',
//       bottom: '-80px',
//       right: '-80px',
//       borderRadius: '50%',
//       pointerEvents: 'none',
//     },
//     navbar: {
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       right: 0,
//       zIndex: 100,
//       padding: '20px 40px',
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       background: 'rgba(10,10,15,0.8)',
//       backdropFilter: 'blur(20px)',
//       borderBottom: '1px solid rgba(255,255,255,0.05)',
//     },
//     brandName: {
//       fontSize: '1.4rem',
//       fontWeight: '800',
//       color: 'white',
//       letterSpacing: '3px',
//       fontFamily: 'serif',
//       textDecoration: 'none',
//     },
//     brandAccent: { color: '#a78bfa' },
//     navLinks: {
//       display: 'flex',
//       gap: '4px',
//       alignItems: 'center',
//     },
//     navLink: {
//       color: 'rgba(255,255,255,0.6)',
//       textDecoration: 'none',
//       fontSize: '0.85rem',
//       fontWeight: '500',
//       padding: '8px 16px',
//       borderRadius: '100px',
//     },
//     navLinkActive: {
//       color: 'white',
//       textDecoration: 'none',
//       fontSize: '0.85rem',
//       fontWeight: '500',
//       padding: '8px 16px',
//       borderRadius: '100px',
//       background: 'rgba(139,92,246,0.2)',
//       border: '1px solid rgba(139,92,246,0.3)',
//     },
//     navCta: {
//       color: 'white',
//       textDecoration: 'none',
//       fontSize: '0.85rem',
//       fontWeight: '500',
//       padding: '8px 20px',
//       borderRadius: '100px',
//       background: '#8b5cf6',
//     },
//     content: {
//       maxWidth: '900px',
//       margin: '0 auto',
//       padding: '120px 40px 80px',
//       position: 'relative',
//       zIndex: 1,
//     },
//     badge: {
//       display: 'inline-flex',
//       alignItems: 'center',
//       gap: '8px',
//       background: 'rgba(139,92,246,0.15)',
//       border: '1px solid rgba(139,92,246,0.4)',
//       color: '#a78bfa',
//       padding: '8px 20px',
//       borderRadius: '100px',
//       fontSize: '0.8rem',
//       fontWeight: '500',
//       letterSpacing: '1px',
//       textTransform: 'uppercase',
//       marginBottom: '32px',
//     },
//     dot: {
//       width: '6px',
//       height: '6px',
//       background: '#a78bfa',
//       borderRadius: '50%',
//     },
//     pageTitle: {
//       fontSize: 'clamp(2rem, 5vw, 3rem)',
//       fontWeight: '800',
//       color: 'white',
//       marginBottom: '40px',
//       fontFamily: 'serif',
//       letterSpacing: '-1px',
//     },
//     titleAccent: {
//       background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
//       WebkitBackgroundClip: 'text',
//       WebkitTextFillColor: 'transparent',
//       backgroundClip: 'text',
//     },

//     // Profile Header Card
//     headerCard: {
//       background: 'rgba(255,255,255,0.04)',
//       border: '1px solid rgba(139,92,246,0.2)',
//       borderRadius: '24px',
//       padding: '32px',
//       backdropFilter: 'blur(10px)',
//       marginBottom: '24px',
//       display: 'flex',
//       alignItems: 'center',
//       gap: '24px',
//     },
//     avatar: {
//       width: '80px',
//       height: '80px',
//       background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
//       borderRadius: '50%',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       fontSize: '2rem',
//       fontWeight: '800',
//       color: 'white',
//       flexShrink: 0,
//     },
//     userName: {
//       fontSize: '1.5rem',
//       fontWeight: '700',
//       color: 'white',
//       marginBottom: '4px',
//     },
//     userEmail: {
//       fontSize: '0.9rem',
//       color: 'rgba(255,255,255,0.45)',
//       marginBottom: '4px',
//     },
//     joinedDate: {
//       fontSize: '0.8rem',
//       color: 'rgba(255,255,255,0.3)',
//     },

//     // Stats Row
//     statsRow: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(3, 1fr)',
//       gap: '16px',
//       marginBottom: '24px',
//     },
//     statCard: {
//       background: 'rgba(255,255,255,0.04)',
//       border: '1px solid rgba(139,92,246,0.15)',
//       borderRadius: '16px',
//       padding: '20px',
//       textAlign: 'center',
//       backdropFilter: 'blur(10px)',
//     },
//     statNumber: {
//       fontSize: '2rem',
//       fontWeight: '800',
//       background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
//       WebkitBackgroundClip: 'text',
//       WebkitTextFillColor: 'transparent',
//       backgroundClip: 'text',
//       marginBottom: '4px',
//     },
//     statLabel: {
//       fontSize: '0.8rem',
//       color: 'rgba(255,255,255,0.4)',
//       textTransform: 'uppercase',
//       letterSpacing: '0.5px',
//     },

//     // Info Grid
//     infoGrid: {
//       display: 'grid',
//       gridTemplateColumns: '1fr 1fr',
//       gap: '20px',
//       marginBottom: '24px',
//     },
//     infoCard: {
//       background: 'rgba(255,255,255,0.04)',
//       border: '1px solid rgba(139,92,246,0.2)',
//       borderRadius: '20px',
//       padding: '28px',
//       backdropFilter: 'blur(10px)',
//     },
//     infoCardTitle: {
//       fontSize: '0.8rem',
//       color: 'rgba(255,255,255,0.4)',
//       textTransform: 'uppercase',
//       letterSpacing: '1px',
//       marginBottom: '16px',
//     },
//     infoLabel: {
//       fontSize: '0.75rem',
//       color: 'rgba(255,255,255,0.35)',
//       textTransform: 'uppercase',
//       letterSpacing: '0.5px',
//       marginBottom: '4px',
//     },
//     infoValue: {
//       fontSize: '0.95rem',
//       color: 'white',
//       fontWeight: '500',
//       marginBottom: '16px',
//     },
//     chip: {
//       display: 'inline-flex',
//       padding: '6px 14px',
//       background: 'rgba(139,92,246,0.15)',
//       border: '1px solid rgba(139,92,246,0.3)',
//       borderRadius: '100px',
//       color: '#a78bfa',
//       fontSize: '0.8rem',
//       fontWeight: '500',
//       margin: '4px',
//     },
//     moodChip: {
//       display: 'inline-flex',
//       padding: '6px 14px',
//       background: 'rgba(236,72,153,0.1)',
//       border: '1px solid rgba(236,72,153,0.3)',
//       borderRadius: '100px',
//       color: '#f9a8d4',
//       fontSize: '0.8rem',
//       fontWeight: '500',
//       margin: '4px',
//     },

//     // Action Buttons Card
//     actionsCard: {
//       background: 'rgba(255,255,255,0.04)',
//       border: '1px solid rgba(139,92,246,0.2)',
//       borderRadius: '20px',
//       padding: '28px',
//       backdropFilter: 'blur(10px)',
//     },
//     btnEdit: {
//       padding: '12px 28px',
//       background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
//       border: 'none',
//       borderRadius: '100px',
//       color: 'white',
//       fontSize: '0.9rem',
//       fontWeight: '600',
//       cursor: 'pointer',
//       marginRight: '12px',
//       fontFamily: "'DM Sans', sans-serif",
//     },
//     btnLogout: {
//       padding: '12px 28px',
//       background: 'rgba(239,68,68,0.1)',
//       border: '1px solid rgba(239,68,68,0.3)',
//       borderRadius: '100px',
//       color: '#fca5a5',
//       fontSize: '0.9rem',
//       fontWeight: '600',
//       cursor: 'pointer',
//       fontFamily: "'DM Sans', sans-serif",
//     },
//     input: {
//       width: '100%',
//       padding: '12px 16px',
//       background: 'rgba(255,255,255,0.06)',
//       border: '1px solid rgba(139,92,246,0.2)',
//       borderRadius: '10px',
//       color: 'white',
//       fontSize: '0.9rem',
//       outline: 'none',
//       marginBottom: '16px',
//       boxSizing: 'border-box',
//       fontFamily: "'DM Sans', sans-serif",
//     },
//     btnSave: {
//       padding: '12px 28px',
//       background: 'rgba(34,197,94,0.15)',
//       border: '1px solid rgba(34,197,94,0.4)',
//       borderRadius: '100px',
//       color: '#86efac',
//       fontSize: '0.9rem',
//       fontWeight: '600',
//       cursor: 'pointer',
//       marginRight: '12px',
//       fontFamily: "'DM Sans', sans-serif",
//     },
//     btnCancel: {
//       padding: '12px 28px',
//       background: 'rgba(255,255,255,0.05)',
//       border: '1px solid rgba(255,255,255,0.1)',
//       borderRadius: '100px',
//       color: 'rgba(255,255,255,0.5)',
//       fontSize: '0.9rem',
//       fontWeight: '600',
//       cursor: 'pointer',
//       fontFamily: "'DM Sans', sans-serif",
//     },
//     editLabel: {
//       fontSize: '0.75rem',
//       color: 'rgba(255,255,255,0.4)',
//       textTransform: 'uppercase',
//       letterSpacing: '0.5px',
//       marginBottom: '8px',
//       display: 'block',
//     },
//   };

//   return (
//     <div style={styles.page}>
//       <div style={styles.orb1} />
//       <div style={styles.orb2} />

//       {/* Navbar */}
//       <nav style={styles.navbar}>
//         <Link to="/" style={styles.brandName}>
//           AMBI <span style={styles.brandAccent}>MOOD</span>
//         </Link>
//         <div style={styles.navLinks}>
//           <Link to="/" style={styles.navLink}>Home</Link>
//           <Link to="/about" style={styles.navLink}>About</Link>
//           <Link to="/contact" style={styles.navLink}>Contact</Link>
//           <Link to="/signup" style={styles.navCta}>Sign Up</Link>
//           <Link to="/login" style={styles.navLink}>Login</Link>
//           <Link to="/profile" style={styles.navLinkActive}>Profile</Link>
//         </div>
//       </nav>

//       <div style={styles.content}>
//         <div style={styles.badge}>
//           <span style={styles.dot}></span>
//           User Profile
//         </div>

//         <h1 style={styles.pageTitle}>
//           My <span style={styles.titleAccent}>Profile</span>
//         </h1>

//         {/* Profile Header */}
//         <div style={styles.headerCard}>
//           <div style={styles.avatar}>
//             {user.name.charAt(0).toUpperCase()}
//           </div>
//           <div>
//             <div style={styles.userName}>{user.name}</div>
//             <div style={styles.userEmail}>{user.email}</div>
//             <div style={styles.joinedDate}>Member since {user.joinedDate}</div>
//           </div>
//         </div>

//         {/* Stats */}
//         <div style={styles.statsRow}>
//           {[
//             { number: '127', label: 'Songs Recommended' },
//             { number: '45', label: 'Playlists Created' },
//             { number: '89', label: 'Mood Detections' },
//           ].map((stat) => (
//             <div key={stat.label} style={styles.statCard}>
//               <div style={styles.statNumber}>{stat.number}</div>
//               <div style={styles.statLabel}>{stat.label}</div>
//             </div>
//           ))}
//         </div>

//         {/* Info Grid */}
//         {!isEditing ? (
//           <>
//             <div style={styles.infoGrid}>
//               {/* Personal Info */}
//               <div style={styles.infoCard}>
//                 <div style={styles.infoCardTitle}>Personal Information</div>
//                 <div style={styles.infoLabel}>Full Name</div>
//                 <div style={styles.infoValue}>{user.name}</div>
//                 <div style={styles.infoLabel}>Email</div>
//                 <div style={styles.infoValue}>{user.email}</div>
//               </div>

//               {/* Music Preferences */}
//               <div style={styles.infoCard}>
//                 <div style={styles.infoCardTitle}>Music Preferences</div>
//                 <div style={styles.infoLabel}>Favorite Genres</div>
//                 <div style={{ marginBottom: '16px' }}>
//                   {user.favoriteGenres.map((genre) => (
//                     <span key={genre} style={styles.chip}>{genre}</span>
//                   ))}
//                 </div>
//                 <div style={styles.infoLabel}>Recent Moods</div>
//                 <div>
//                   {user.recentMoods.map((mood) => (
//                     <span key={mood} style={styles.moodChip}>{mood}</span>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div style={styles.actionsCard}>
//               <button style={styles.btnEdit} onClick={handleEdit}>
//                 ✏️ Edit Profile
//               </button>
//               <button style={styles.btnLogout} onClick={handleLogout}>
//                 🚪 Logout
//               </button>
//             </div>
//           </>
//         ) : (
//           /* Edit Mode */
//           <div style={styles.actionsCard}>
//             <div style={{ marginBottom: '24px' }}>
//               <label style={styles.editLabel}>Full Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={editData.name}
//                 onChange={handleChange}
//                 style={styles.input}
//               />
//               <label style={styles.editLabel}>Email Address</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={editData.email}
//                 onChange={handleChange}
//                 style={styles.input}
//               />
//             </div>
//             <button style={styles.btnSave} onClick={handleSave}>
//               ✅ Save Changes
//             </button>
//             <button style={styles.btnCancel} onClick={handleCancel}>
//               Cancel
//             </button>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// };

// export default Profile;



// 




import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const EMOTION_COLORS = { happy: '#f59e0b', sad: '#60a5fa', angry: '#ef4444', neutral: '#94a3b8', fearful: '#a78bfa', disgusted: '#10b981', surprised: '#f97316', energetic: '#ec4899', calm: '#06b6d4', romantic: '#e879f9' };
const EMOTION_EMOJI = { happy: '😊', sad: '😢', angry: '😠', neutral: '😐', fearful: '😨', disgusted: '🤢', surprised: '😲', energetic: '⚡', calm: '😌', romantic: '❤️' };

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: localStorage.getItem('userName') || 'Your Name', email: localStorage.getItem('userEmail') || '@example.com', joinedDate: 'January 2024' });
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ name: user.name, email: user.email });
  const [moodHistory, setMoodHistory] = useState([]);
  const [loadingHistory, setLoadingHistory] = useState(true);
  const [activeTab, setActiveTab] = useState('bar');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fetchMoodHistory = async () => {
      try {
        const email = localStorage.getItem('userEmail');
        if (!email) { setLoadingHistory(false); return; }
        const res = await fetch(`https://ambimood-backend-2.onrender.com/api/mood-history/${encodeURIComponent(email)}`);
        const data = await res.json();
        const counts = {};
        (data.history || []).forEach(item => { counts[item.emotion] = (counts[item.emotion] || 0) + 1; });
        const chartData = Object.entries(counts).map(([emotion, count]) => ({ emotion, count, emoji: EMOTION_EMOJI[emotion] || '🎵', fill: EMOTION_COLORS[emotion] || '#8b5cf6' })).sort((a, b) => b.count - a.count);
        setMoodHistory(chartData);
      } catch (err) { console.error(err); } finally { setLoadingHistory(false); }
    };
    fetchMoodHistory();
  }, []);

  const totalDetections = moodHistory.reduce((sum, m) => sum + m.count, 0);
  const topMood = moodHistory[0];

  const handleSave = () => {
    localStorage.setItem('userName', editData.name);
    localStorage.setItem('userEmail', editData.email);
    setUser({ ...user, name: editData.name, email: editData.email });
    setIsEditing(false);
  };
  const handleLogout = () => { localStorage.removeItem('userName'); localStorage.removeItem('userEmail'); navigate('/'); };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const d = payload[0].payload;
      return <div style={{ background: 'rgba(15,10,30,0.95)', border: `1px solid ${d.fill}60`, borderRadius: '12px', padding: '12px 16px' }}><div style={{ color: 'white', fontWeight: '700' }}>{d.emoji} {d.emotion}</div><div style={{ color: d.fill, fontWeight: '600' }}>{d.count} times</div></div>;
    }
    return null;
  };

  const navLinks = [
    { label: 'Home', href: '/' }, { label: 'About', href: '/about' }, { label: 'Contact', href: '/contact' },
    { label: 'SignUp', href: '/signup' }, { label: 'Login', href: '/login' }, { label: 'Profile', href: '/profile' },
  ];

  const s = {
    page: { minHeight: '100vh', background: 'linear-gradient(135deg, #0a0a0f 0%, #1a0533 50%, #0d0d1a 100%)', fontFamily: "'DM Sans', sans-serif", position: 'relative', overflow: 'hidden' },
    orb1: { position: 'fixed', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)', top: '-100px', left: '-100px', borderRadius: '50%', pointerEvents: 'none' },
    orb2: { position: 'fixed', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(236,72,153,0.2) 0%, transparent 70%)', bottom: '-80px', right: '-80px', borderRadius: '50%', pointerEvents: 'none' },
    navbar: { position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(10,10,15,0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.05)' },
    brand: { fontSize: '1.1rem', fontWeight: '800', color: 'white', letterSpacing: '3px', fontFamily: 'serif', textDecoration: 'none' },
    brandAccent: { color: '#a78bfa' },
    content: { maxWidth: '900px', margin: '0 auto', padding: '100px 16px 80px', position: 'relative', zIndex: 1 },
    badge: { display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.4)', color: '#a78bfa', padding: '8px 20px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: '500', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '28px' },
    dot: { width: '6px', height: '6px', background: '#a78bfa', borderRadius: '50%' },
    pageTitle: { fontSize: 'clamp(1.8rem, 7vw, 3rem)', fontWeight: '800', color: 'white', marginBottom: '32px', fontFamily: 'serif', letterSpacing: '-1px' },
    titleAccent: { background: 'linear-gradient(135deg, #8b5cf6, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' },
    headerCard: { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '24px', padding: '24px 20px', backdropFilter: 'blur(10px)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' },
    avatar: { width: '70px', height: '70px', minWidth: '70px', background: 'linear-gradient(135deg, #8b5cf6, #ec4899)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', fontWeight: '800', color: 'white' },
    graphCard: { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '24px', padding: '24px 20px', backdropFilter: 'blur(10px)', marginBottom: '20px' },
    graphTitle: { fontSize: '1.1rem', fontWeight: '700', color: 'white', marginBottom: '4px' },
    graphSubtitle: { fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)', marginBottom: '20px' },
    tabRow: { display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' },
    tab: { padding: '7px 18px', borderRadius: '100px', fontSize: '0.82rem', fontWeight: '600', cursor: 'pointer', border: '1px solid rgba(139,92,246,0.3)', background: 'transparent', color: '#a78bfa', fontFamily: "'DM Sans', sans-serif" },
    tabActive: { padding: '7px 18px', borderRadius: '100px', fontSize: '0.82rem', fontWeight: '600', cursor: 'pointer', border: '1px solid #8b5cf6', background: '#8b5cf6', color: 'white', fontFamily: "'DM Sans', sans-serif" },
    moodChipsRow: { display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' },
    infoCard: { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '20px', padding: '24px 20px', backdropFilter: 'blur(10px)', marginBottom: '20px' },
    infoCardTitle: { fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' },
    infoLabel: { fontSize: '0.73rem', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' },
    infoValue: { fontSize: '0.93rem', color: 'white', fontWeight: '500', marginBottom: '14px' },
    actionsCard: { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '20px', padding: '24px 20px', backdropFilter: 'blur(10px)' },
    btnEdit: { padding: '11px 24px', background: 'linear-gradient(135deg, #8b5cf6, #ec4899)', border: 'none', borderRadius: '100px', color: 'white', fontSize: '0.88rem', fontWeight: '600', cursor: 'pointer', marginRight: '10px', fontFamily: "'DM Sans', sans-serif" },
    btnLogout: { padding: '11px 24px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '100px', color: '#fca5a5', fontSize: '0.88rem', fontWeight: '600', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" },
    input: { width: '100%', padding: '12px 14px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '10px', color: 'white', fontSize: '0.9rem', outline: 'none', marginBottom: '14px', boxSizing: 'border-box', fontFamily: "'DM Sans', sans-serif" },
    btnSave: { padding: '11px 24px', background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.4)', borderRadius: '100px', color: '#86efac', fontSize: '0.88rem', fontWeight: '600', cursor: 'pointer', marginRight: '10px', fontFamily: "'DM Sans', sans-serif" },
    btnCancel: { padding: '11px 24px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', color: 'rgba(255,255,255,0.5)', fontSize: '0.88rem', fontWeight: '600', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" },
    editLabel: { fontSize: '0.73rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px', display: 'block' },
  };

  return (
    <div style={s.page}>
      <div style={s.orb1} /><div style={s.orb2} />

      {/* Navbar */}
      <nav style={s.navbar}>
        <Link to="/" style={s.brand}>AMBI <span style={s.brandAccent}>MOOD</span></Link>
        <div className="desktop-nav" style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
          {navLinks.map(l => (<Link key={l.label} to={l.href} style={{ color: l.href === '/profile' ? 'white' : 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '500', padding: '7px 14px', borderRadius: '100px', background: l.href === '/profile' ? 'rgba(139,92,246,0.2)' : 'transparent', border: l.href === '/profile' ? '1px solid rgba(139,92,246,0.3)' : '1px solid transparent' }}>{l.label}</Link>))}
        </div>
        <button className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'none', background: 'none', border: '1px solid rgba(139,92,246,0.3)', borderRadius: '8px', color: '#c4b5fd', fontSize: '1.2rem', cursor: 'pointer', padding: '4px 10px' }}>{menuOpen ? '✕' : '☰'}</button>
      </nav>

      {menuOpen && (
        <div style={{ position: 'fixed', top: '54px', left: 0, right: 0, zIndex: 99, background: 'rgba(10,10,15,0.97)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(139,92,246,0.2)', padding: '8px 16px 16px' }}>
          {navLinks.map(l => (<Link key={l.label} to={l.href} onClick={() => setMenuOpen(false)} style={{ display: 'block', color: 'rgba(196,181,253,0.85)', textDecoration: 'none', fontSize: '1rem', fontWeight: '600', padding: '13px 12px', borderBottom: '1px solid rgba(139,92,246,0.08)' }}>{l.label}</Link>))}
        </div>
      )}

      <div style={s.content}>
        <div style={s.badge}><span style={s.dot}></span>User Profile</div>
        <h1 style={s.pageTitle}>My <span style={s.titleAccent}>Profile</span></h1>

        {/* Header */}
        <div style={s.headerCard}>
          <div style={s.avatar}>{user.name.charAt(0).toUpperCase()}</div>
          <div>
            <div style={{ fontSize: '1.3rem', fontWeight: '700', color: 'white', marginBottom: '4px' }}>{user.name}</div>
            <div style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.45)', marginBottom: '2px' }}>{user.email}</div>
            <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)' }}>Member since {user.joinedDate}</div>
          </div>
        </div>

        {/* Stats - responsive grid */}
        <div className="stats-row">
          {[
            { num: totalDetections, label: 'Mood Detections' },
            { num: moodHistory.length, label: 'Unique Emotions' },
            { num: topMood ? topMood.emoji : '🎵', label: `Top: ${topMood ? topMood.emotion : '—'}` },
          ].map((s2, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(139,92,246,0.15)', borderRadius: '16px', padding: '18px', textAlign: 'center', backdropFilter: 'blur(10px)' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: '800', background: 'linear-gradient(135deg, #8b5cf6, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '4px' }}>{s2.num}</div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{s2.label}</div>
            </div>
          ))}
        </div>

        {/* Graph */}
        <div style={s.graphCard}>
          <div style={s.graphTitle}>📊 Mood History Graph</div>
          <div style={s.graphSubtitle}>MongoDB Emotion History — Live Data</div>
          <div style={s.tabRow}>
            <button style={activeTab === 'bar' ? s.tabActive : s.tab} onClick={() => setActiveTab('bar')}>📊 Bar Chart</button>
            <button style={activeTab === 'pie' ? s.tabActive : s.tab} onClick={() => setActiveTab('pie')}>🥧 Pie Chart</button>
          </div>
          {loadingHistory ? (
            <div style={{ color: '#a78bfa', textAlign: 'center', padding: '40px' }}>⏳ Loading...</div>
          ) : moodHistory.length === 0 ? (
            <div style={{ color: 'rgba(255,255,255,0.3)', textAlign: 'center', padding: '40px', fontSize: '0.9rem' }}>😶 Mood is Not detect!<br /><span style={{ fontSize: '0.8rem' }}>After Detection Graph Will Show!!</span></div>
          ) : (
            <>
              {activeTab === 'bar' && (
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={moodHistory} margin={{ top: 10, right: 10, left: -20, bottom: 5 }}>
                    <XAxis dataKey="emotion" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 10 }} tickFormatter={(v) => `${EMOTION_EMOJI[v] || ''}`} />
                    <YAxis tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 10 }} allowDecimals={false} />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="count" radius={[8, 8, 0, 0]}>{moodHistory.map((entry, i) => <Cell key={i} fill={entry.fill} />)}</Bar>
                  </BarChart>
                </ResponsiveContainer>
              )}
              {activeTab === 'pie' && (
                <ResponsiveContainer width="100%" height={260}>
                  <PieChart>
                    <Pie data={moodHistory} dataKey="count" nameKey="emotion" cx="50%" cy="50%" outerRadius={85} label={({ emotion, percent }) => `${EMOTION_EMOJI[emotion] || ''} ${(percent * 100).toFixed(0)}%`}>
                      {moodHistory.map((entry, i) => <Cell key={i} fill={entry.fill} />)}
                    </Pie>
                    <Tooltip formatter={(val, name) => [`${val} times`, name]} />
                    <Legend formatter={(val) => `${EMOTION_EMOJI[val] || ''} ${val}`} wrapperStyle={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.78rem' }} />
                  </PieChart>
                </ResponsiveContainer>
              )}
              <div style={s.moodChipsRow}>
                {moodHistory.map((m) => (
                  <span key={m.emotion} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '5px 12px', background: `${m.fill}20`, border: `1px solid ${m.fill}50`, borderRadius: '100px', color: m.fill, fontSize: '0.78rem', fontWeight: '600' }}>
                    {m.emoji} {m.emotion} × {m.count}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Info + Actions */}
        {!isEditing ? (
          <>
            <div style={s.infoCard}>
              <div style={s.infoCardTitle}>Personal Information</div>
              <div style={s.infoLabel}>Full Name</div>
              <div style={s.infoValue}>{user.name}</div>
              <div style={s.infoLabel}>Email</div>
              <div style={s.infoValue}>{user.email}</div>
            </div>
            <div style={s.actionsCard}>
              <button style={s.btnEdit} onClick={() => setIsEditing(true)}>✏️ Edit Profile</button>
              <button style={s.btnLogout} onClick={handleLogout}>🚪 Logout</button>
            </div>
          </>
        ) : (
          <div style={s.actionsCard}>
            <div style={{ marginBottom: '20px' }}>
              <label style={s.editLabel}>Full Name</label>
              <input type="text" name="name" value={editData.name} onChange={(e) => setEditData({ ...editData, name: e.target.value })} style={s.input} />
              <label style={s.editLabel}>Email Address</label>
              <input type="email" name="email" value={editData.email} onChange={(e) => setEditData({ ...editData, email: e.target.value })} style={s.input} />
            </div>
            <button style={s.btnSave} onClick={handleSave}>✅ Save Changes</button>
            <button style={s.btnCancel} onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        )}
      </div>

      <style>{`
        .stats-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-bottom: 20px; }
        @media (max-width: 480px) { .stats-row { grid-template-columns: repeat(3, 1fr); gap: 8px; } }
        @media (max-width: 768px) { .desktop-nav { display: none !important; } .hamburger-btn { display: block !important; } }
        @media (min-width: 769px) { .hamburger-btn { display: none !important; } .desktop-nav { display: flex !important; } }
      `}</style>
    </div>
  );
};

export default Profile;