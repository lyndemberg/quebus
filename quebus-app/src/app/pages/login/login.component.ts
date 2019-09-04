import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { LoginService } from 'src/app/core/services/login.service';
import { UsuarioStorageService } from 'src/app/core/services/usuario-storage.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  formGroupLogin: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private titleService: Title,
              private router: Router,
              private loginService: LoginService,
              private usuarioStorage: UsuarioStorageService,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.titleService.setTitle('QUEBUS - Acesso ao sistema');
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  logar(): void {
    this.subscriptions.push(
      // get authorization
      this.loginService.login(this.formGroupLogin.value.username,
                              this.formGroupLogin.value.password).subscribe((response) => {
        const usuario = response.body.data.user;
        const token = response.body.data.token;
        usuario.token = token;
        this.usuarioStorage.salvarUsuarioLocal(usuario);
        this.router.navigate(['/paginainicial']);
      }, error => {
        if (error.status === 400) {
          this.toastr.error('', 'Dados incorretos');
        } else if (error.status === 404) {
          this.toastr.error('', 'Usuário não cadastrado');
        }
      })
    );
  }

}
