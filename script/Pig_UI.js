var GUI;
      function newLevel(){
      var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
      ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
      try{
      var layout = new android.widget.LinearLayout(ctx);
      layout.setOrientation(1);
      
      var button = new android.widget.Button(ctx);
      button.setText('Ride Pig');
      button.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      //Code
      }
      }));
      layout.addView(button);
      
      GUI = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
      GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
      GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.CENTER, 5, 60);
      }catch(err){
      print('An error occured: ' + err);
      }
      }}));
      }

       function leaveGame(){
      var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
      ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
      if(GUI != null){
      GUI.dismiss();
      GUI = null;
      }
      }}));
      }
      
      var button = new android.widget.Button(ctx);
      button.setText('Button');
      button.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      //Your Code Here...
      }
      }));
      layout.addView(button);
